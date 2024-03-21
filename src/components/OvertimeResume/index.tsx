import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import { useCalcParamsStore } from "../../stores";
import OvertimeAddButton from "../OvertimeAddButton";

type OvertimeResumeProps = {
  onPress: () => void;
};

const OvertimeResume = ({ onPress }: OvertimeResumeProps) => {

  const [totalValue, setTotalValue] = useState<any>(0);
  const [totalHours, setTotalHours] = useState(0);

  const CalcParams = useCalcParamsStore();

  useEffect(() => {
    setTotalValue(CalcParams?.Overtimes?.reduce((acumulator, obj) => {
      return acumulator + obj.value;
    }, 0))
    setTotalHours(CalcParams?.Overtimes?.reduce((acumulator, obj) => {
      return acumulator + obj.hours;
    }, 0))
  }, [CalcParams.Overtimes])

  return (
    <View style={styles.MainContainer}>
      <View style={styles.SubContainer}>
        <View style={styles.InfoContainer}>
          <Text style={styles.TitleText}>Amount to receive</Text>
          <Text style={styles.InfoText}>{`R$ ${totalValue !== undefined ? totalValue?.toFixed(2)?.replace('.',',') : '0,00'}`}</Text>
        </View>
        <View style={styles.InfoContainer}>
          <Text style={styles.TitleText}>Total hours</Text>
          <Text style={styles.InfoText}>{`${totalHours !== undefined ? totalHours : 0}h`}</Text>
        </View>
      </View>
      <OvertimeAddButton onPress={onPress} />
      <View style={styles.Divider}/>
    </View>
  );
};

export default OvertimeResume;
