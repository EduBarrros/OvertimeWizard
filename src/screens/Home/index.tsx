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

      const OvertimeBody = {
        initDate: initialDate,
        endDate: finalDate,
        hours: totalHorasDiasEspeciais,
        value: CalcHourPrice,
      };

      CalcParams.setOvertime([...CalcParams.Overtimes, OvertimeBody]);
    } else if (totalHorasDiasEspeciais === 0) {
      const MorningOvetime =
        totalHorasDiurnas *
        (CalcParams.HourPrice +
          (CalcParams.HourPrice * CalcParams.DayTimePercentage) / 100);

      const NightOvertime =
        totalHorasNoturnas *
        (CalcParams.HourPrice +
          (CalcParams.HourPrice * CalcParams.NightTimePercentage) / 100);

      const OvertimeBody = {
        initDate: initialDate,
        endDate: finalDate,
        hours: totalHorasDiurnas + totalHorasNoturnas,
        value: MorningOvetime + NightOvertime,
      };

      CalcParams.setOvertime([...CalcParams.Overtimes, OvertimeBody]);
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
        onSubmit={() => {
          setInitialDate("")
          setFinalDate("")
          setShowAddModal(!showAddModal)
          AddOvertimeHandler()
        }}
        initialDate={initialDate}
        setInitialDate={setInitialDate}
        finalDate={finalDate}
        setFinalDate={setFinalDate}
      />
    </SafeAreaView>
  );
};

export default Home;
