import { parse, isSunday, set } from 'date-fns';
import { GovApi } from '../api';

const CalcOvertimeHours = async (initDate: string, finalDate: string) => {

  const holydays: any = await GovApi.get('feriados/v1/2024');

  // Formato de data e hora ajustado
  const formatoDataHora = 'dd/MM/yyyy HH:mm';

  // Converte as strings para objetos Date usando o novo formato
  const data1 = parse(initDate, formatoDataHora, new Date());
  const data2 = parse(finalDate, formatoDataHora, new Date());

  // Inicializa o total de horas diurnas, noturnas, e em dias especiais

  let totalHorasDiurnas = 0;
  let totalHorasNoturnas = 0;
  let totalHorasEspeciais = 0;

  // Itera sobre as horas entre as duas datas
  for (let horaAtual = data1; horaAtual < data2; horaAtual = set(horaAtual, { minutes: horaAtual.getMinutes() + 1 })) {

    // Verifica se a hora está em um domingo
    const isSundayHour = isSunday(horaAtual);

    // Verifica se a hora está em um feriado
    const isHolyday = holydays?.data?.some((holyday: any) => holyday?.date === horaAtual.toISOString().split('T')[0]);

    // Contabiliza como especial (feriado ou domingo)
    if (isSundayHour || isHolyday) {
      totalHorasEspeciais++;
    } else {
      // Verifica se a hora está entre 6h e 23h para contabilizar como diurna
      if (horaAtual.getHours() >= 6 && horaAtual.getHours() <= 23) {
        totalHorasDiurnas++;
      } else { // Caso contrário, contabiliza como noturna
        totalHorasNoturnas++;
      }
    }
  }

  const OverTimeReturnBody = { totalHorasDiurnas: totalHorasDiurnas / 60, totalHorasNoturnas: totalHorasNoturnas / 60, totalHorasEspeciais: totalHorasEspeciais / 60 };

  console.log(OverTimeReturnBody)
  return OverTimeReturnBody
};

export default CalcOvertimeHours;