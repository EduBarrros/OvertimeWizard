import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import moment from "moment";

type HistoricCardProps = {
  hours: number;
  value: number;
  initDate: string;
  endDate: string;
};

const HistoricCard = ({
  hours,
  value,
  initDate,
  endDate,
}: HistoricCardProps) => {

  const ConverterParaHorasEMinutos = (decimalHoras: number) => {
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

  return (
    <View style={styles.MainContainer}>
      <View style={styles.SectionContainer}>
        <View>
          <Text style={styles.DateName}>To receive:</Text>
          <Text style={styles.SectionValue}>
            R$ {value?.toFixed(2)?.replace(".", ",")}
          </Text>
        </View>
        <Text style={styles.SectionText}>
          <Text style={styles.DateName}>Start:</Text>{" "}
          {moment(initDate, "DD/MM/YYYY HH:mm").format("L")}{" "}
          {moment(initDate, "DD/MM/YYYY HH:mm").format("LT")}
        </Text>
      </View>
      <View style={styles.SectionContainer}>
        <View>
          <Text style={styles.DateName}>Hours:</Text>
          {
            ConverterParaHorasEMinutos(hours).minutos > 0
            ?
            <Text style={styles.TimeText}>{Math.floor(hours)}h {ConverterParaHorasEMinutos(hours).minutosFormatados}min</Text>
            :
            <Text style={styles.TimeText}>{hours}h</Text>
          }
        </View>
        <Text style={styles.SectionText}>
          <Text style={styles.DateName}>End:</Text>{" "}
          {moment(endDate, "DD/MM/YYYY HH:mm").format("L")}{" "}
          {moment(endDate, "DD/MM/YYYY HH:mm").format("LT")}
        </Text>
      </View>
    </View>
  );
};

export default HistoricCard;
