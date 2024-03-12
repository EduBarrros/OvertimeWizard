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
        <View style={styles.TimeContainer}>
            <Text>
                Inicio: {initDate}
            </Text>
            <Text>
                Final: {endDate}
            </Text>
        </View>
        <View>
            <Text>
                {hours}Horas
            </Text>
            <Text>
                {value}Reais
            </Text>
        </View>
    </View>
  )
};

export default HistoricCard;
