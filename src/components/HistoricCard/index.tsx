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
  return (
    <View style={styles.MainContainer}>
      <View style={styles.SectionContainer}>
        <View>
          <Text style={styles.DateName}>To receive:</Text>
          <Text style={styles.SectionValue}>
            R$ {value.toFixed(2).replace(".", ",")}
          </Text>
        </View>
        <Text style={styles.SectionText}>
          <Text style={styles.DateName}>Start:</Text>{" "}
          {moment(initDate, "YYYY/MM/DD HH:mm").format('L')}{" "}
          {moment(initDate, "YYYY/MM/DD HH:mm").format("LT")}
        </Text>
      </View>
      <View style={styles.SectionContainer}>
        <View>
          <Text style={styles.DateName}>Hours:</Text>
          <Text style={styles.TimeText}>{hours} H</Text>
        </View>
        <Text style={styles.SectionText}>
          <Text style={styles.DateName}>End:</Text>{" "}
          {moment(endDate, "YYYY/MM/DD HH:mm").format('L')}{" "}
          {moment(endDate, "YYYY/MM/DD HH:mm").format("LT")}
        </Text>
      </View>
    </View>
  );
};

export default HistoricCard;
