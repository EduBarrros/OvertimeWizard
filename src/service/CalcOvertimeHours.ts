import { parse, isSunday, set } from 'date-fns';
import { GovApi } from '../api';

const CalcOvertimeHours = async (initDate: string, finalDate: string) => {

  const holydays: any = await GovApi.get('feriados/v1/2024');

  const formatoDataHora = 'yyyy/MM/dd HH:mm';

  // Converte as strings para objetos Date
  const data1 = parse(initDate, formatoDataHora, new Date());
  const data2 = parse(finalDate, formatoDataHora, new Date());

  // Inicializa o total de horas diurnas, noturnas, e em dias especiais
  let totalHorasDiurnas = 0;
  let totalHorasNoturnas = 0;
  let totalHorasDiasEspeciais = 0;

  // Itera sobre as horas entre as duas datas
  for (let horaAtual = data1; horaAtual < data2; horaAtual = set(horaAtual, { hours: horaAtual.getHours() + 1 })) {
    // Verifica se a hora está em um domingo
    const isSundayHour = isSunday(horaAtual);

    // Verifica se a hora está em um feriado
    const isHolyday = holydays?.data?.some((holyday: any) => holyday?.date === horaAtual.toISOString().split('T')[0]);

    // Contabiliza como especial (feriado ou domingo)
    if (isSundayHour || isHolyday) {
      totalHorasDiasEspeciais++;
    } else {
      if (horaAtual.getHours() >= 6 && horaAtual.getHours() <= 23) {
        totalHorasDiurnas++;
      } else {
        totalHorasNoturnas++;
      }
    }
  }

  return { totalHorasDiurnas, totalHorasNoturnas, totalHorasDiasEspeciais };
};

export default CalcOvertimeHours;