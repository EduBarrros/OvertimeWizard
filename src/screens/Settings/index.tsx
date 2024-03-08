import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Header, CustomInput, CustomButton } from "../../components";
import { useCalcParamsStore } from "../../stores";
import styles from "./styles";

const Settings = () => {

  const CalcParams = useCalcParamsStore();

  const [HourPrice, setHourPrice] = useState(CalcParams.HourPrice.toString());
  const [DayTimePercentage, setDayTimePercentage] = useState(CalcParams.DayTimePercentage.toString());
  const [NightTimePercentage, setNightTimePercentage] = useState(CalcParams.NightTimePercentage.toString());
  const [SundaysTimePercentage, setSundayTimePercentage] = useState(CalcParams.SundaysTimePercentage.toString());

  const CalcParamsUpdateHandler = () => {
    console.log("entrou")
    if(HourPrice && DayTimePercentage && NightTimePercentage && SundaysTimePercentage !== ""){
      CalcParams.SetHourPrice(parseFloat(HourPrice));
      CalcParams.SetDayTimePercentage(parseInt(DayTimePercentage));
      CalcParams.SetNightTimePercentage(parseInt(NightTimePercentage));
      CalcParams.SetSundaysTimePercentage(parseInt(SundaysTimePercentage));
    }
  }

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header title="Settings"/>
      <CustomInput title={"Hour price"} defaultValue={HourPrice} onChangeText={setHourPrice}/>
      <CustomInput title={"Extra daytime percentage"} defaultValue={DayTimePercentage} onChangeText={setDayTimePercentage}/>
      <CustomInput title={"Extra night percentage"} defaultValue={NightTimePercentage} onChangeText={setNightTimePercentage}/>
      <CustomInput title={"Extra percentage on Sundays and holidays"} defaultValue={SundaysTimePercentage} onChangeText={setSundayTimePercentage}/>
      <CustomButton text="Save" onPress={() => CalcParamsUpdateHandler()}/>
    </SafeAreaView>
  );
};

export default Settings;
