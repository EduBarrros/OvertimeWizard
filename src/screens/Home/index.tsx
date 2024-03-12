import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import { CalcOvertimeHours } from "../../service";
import {
  Header,
  OvertimeResume,
  OvertimeHistoric,
  OvertimeAddModal,
} from "../../components";
import { useCalcParamsStore } from "../../stores";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [totalValue, setTotalValue] = useState(0);

  const CalcParams = useCalcParamsStore();

  const AddOvertimeHandler = async () => {
    const { totalHorasDiurnas, totalHorasNoturnas, totalHorasDiasEspeciais } =
      await CalcOvertimeHours(initialDate, finalDate);

    if (
      totalHorasDiasEspeciais > 0 &&
      totalHorasDiurnas === 0 &&
      totalHorasNoturnas === 0
    ) {
      const CalcHourPrice =
        totalHorasDiasEspeciais *
        (CalcParams.HourPrice *
          (CalcParams.HourPrice + CalcParams.SundaysTimePercentage / 100));

      setTotalValue(CalcHourPrice);
    } else if (totalHorasDiasEspeciais === 0) {
      const MorningOvetime =
        totalHorasDiurnas *
        (CalcParams.HourPrice +
          (CalcParams.HourPrice * CalcParams.DayTimePercentage) / 100);

      const NightOvertime =
        totalHorasNoturnas *
        (CalcParams.HourPrice +
          (CalcParams.HourPrice * CalcParams.NightTimePercentage) / 100);

      setTotalValue(MorningOvetime + NightOvertime);
    }
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header title="Hi Eduardo" />
      <OvertimeResume />
      <OvertimeHistoric onPress={() => setShowAddModal(!showAddModal)} />
      <OvertimeAddModal
        show={showAddModal}
        onClose={() => setShowAddModal(!showAddModal)}
        onSubmit={() => AddOvertimeHandler()}
        initialDate={initialDate}
        setInitialDate={setInitialDate}
        finalDate={finalDate}
        setFinalDate={setFinalDate}
      />
    </SafeAreaView>
  );
};

export default Home;
