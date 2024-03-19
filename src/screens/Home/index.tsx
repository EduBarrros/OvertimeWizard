import React, { useState } from "react";
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
    
    const { totalHorasDiurnas, totalHorasNoturnas, totalHorasEspeciais } =
      await CalcOvertimeHours(initialDate, finalDate);
    if (
      totalHorasEspeciais > 0 &&
      totalHorasDiurnas === 0 &&
      totalHorasNoturnas === 0
    ) {
      const CalcHourPrice =
        totalHorasEspeciais *
        (CalcParams.HourPrice * (1 + CalcParams.SundaysTimePercentage / 100));

      const OvertimeBody = {
        initDate: initialDate,
        endDate: finalDate,
        hours: totalHorasEspeciais,
        value: CalcHourPrice,
      };

      CalcParams.setOvertime([...CalcParams.Overtimes, OvertimeBody]);
    } else if (totalHorasEspeciais === 0) {
      const MorningOvetime =
        totalHorasDiurnas *
        (CalcParams.HourPrice * (1 + CalcParams.DayTimePercentage / 100));

      const NightOvertime =
        totalHorasNoturnas *
        (CalcParams.HourPrice * (1 + CalcParams.NightTimePercentage / 100));

      const OvertimeBody = {
        initDate: initialDate,
        endDate: finalDate,
        hours: totalHorasDiurnas + totalHorasNoturnas,
        value: MorningOvetime + NightOvertime,
      };

      CalcParams.setOvertime([...CalcParams.Overtimes, OvertimeBody]);
    } else {
      const SpecialOvertime =
        totalHorasEspeciais *
        (CalcParams.HourPrice * (1 + CalcParams.SundaysTimePercentage / 100));

      const MorningOvetime =
        totalHorasDiurnas *
        (CalcParams.HourPrice * (1 + CalcParams.DayTimePercentage / 100));

      const NightOvertime =
        totalHorasNoturnas *
        (CalcParams.HourPrice * (1 + CalcParams.NightTimePercentage / 100));

      const OvertimeBody = {
        initDate: initialDate,
        endDate: finalDate,
        hours: totalHorasDiurnas + totalHorasNoturnas + totalHorasEspeciais,
        value: MorningOvetime + NightOvertime + SpecialOvertime,
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
          setInitialDate("");
          setFinalDate("");
          setShowAddModal(!showAddModal);
          AddOvertimeHandler();
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
