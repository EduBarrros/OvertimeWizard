type ResultsProps = {
  validDate: boolean
  validHour: boolean
}

const DateTimeInfoValidator = (date: string, hour: string) => {

  const regexDate = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const regexHour = /^(\d{2}):(\d{2})$/;

  const results: ResultsProps = {
    validDate: false,
    validHour: false
  };

  // Validação da data
  const matchData = date.match(regexDate);
  if (matchData) {
    const day = parseInt(matchData[1], 10);
    const month = parseInt(matchData[2], 10);
    const year = parseInt(matchData[3], 10);
    results.validDate =
      day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1000 && year <= 9999;
  } else {
    results.validDate = false;
  }

  // Validação da hora
  const matchHora = hour.match(regexHour);
  if (matchHora) {
    const hour = parseInt(matchHora[1], 10);
    const minute = parseInt(matchHora[2], 10);
    results.validHour = hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
  } else {
    results.validHour = false;
  }

  return results;
}

export default DateTimeInfoValidator;