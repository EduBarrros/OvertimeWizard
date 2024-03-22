import React from "react";
import moment from "moment";
import styles from "./styles";
import { View, Text } from "react-native";
import { HoursWithMinutesConverter } from "../../Utils";

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
            HoursWithMinutesConverter(hours).minutos > 0
            ?
            <Text style={styles.TimeText}>{Math.floor(hours)}h {HoursWithMinutesConverter(hours).minutosFormatados}min</Text>
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
