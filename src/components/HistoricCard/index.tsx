import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type HistoricCardProps = {
    hours: number
    value: number
    initDate: string
    endDate: string
  }
  

const HistoricCard: React.FC<HistoricCardProps> = ({ hours, value, initDate, endDate }) => {
  return (
    <View style={styles.MainContainer}>
        <Text>
            {hours}
        </Text>
        <Text>
            {value}
        </Text>
    </View>
  )
};

export default HistoricCard;
