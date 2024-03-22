const HoursWithMinutesConverter = (decimalHoras: number) => {
    // Extrai a parte inteira (horas) e a parte decimal (fração de horas)
    let horas = Math.floor(decimalHoras);
    let minutosDecimal = (decimalHoras - horas) * 60;
    
    // Arredonda os minutos para o número inteiro mais próximo
    let minutos = Math.round(minutosDecimal);

     // Formata os minutos para garantir que tenham dois dígitos
     let minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
    
    // Retorna as horas e os minutos formatados
    return {horas, minutos, minutosFormatados}
}

export default HoursWithMinutesConverter;