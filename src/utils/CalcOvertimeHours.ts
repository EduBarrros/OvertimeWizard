import { parse, isSunday, differenceInHours, isWithinInterval, set } from 'date-fns';

// Função para calcular a quantidade de horas diurnas, noturnas e em domingos entre duas datas
const CalcOvertimeHours = (dataStr1: string, dataStr2: string) => {
  const formatoDataHora = 'yyyy/MM/dd HH:mm';

  // Converte as strings para objetos Date
  const data1 = parse(dataStr1, formatoDataHora, new Date());
  const data2 = parse(dataStr2, formatoDataHora, new Date());

  // Inicializa o total de horas diurnas, noturnas e em domingos
  let totalHorasDiurnas = 0;
  let totalHorasNoturnas = 0;
  let totalHorasDomingos = 0;

  // Itera sobre as horas entre as duas datas
  for (let horaAtual = data1; horaAtual < data2; horaAtual = set(horaAtual, { hours: horaAtual.getHours() + 1 })) {
    if (isWithinInterval(horaAtual, { start: set(horaAtual, { hours: 6 }), end: set(horaAtual, { hours: 23, minutes: 59, seconds: 59 }) })) {
      totalHorasDiurnas++;
    } else if (isWithinInterval(horaAtual, { start: set(horaAtual, { hours: 0 }), end: set(horaAtual, { hours: 5, minutes: 59, seconds: 59 }) })) {
      totalHorasNoturnas++;
    }

    if (isSunday(horaAtual)) {
      totalHorasDomingos++;
    }
  }

  return { totalHorasDiurnas, totalHorasNoturnas, totalHorasDomingos };
};

export default CalcOvertimeHours;