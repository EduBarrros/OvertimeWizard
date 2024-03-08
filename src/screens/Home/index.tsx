import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import { CalcOvertimeHours } from "../../utils";
import {
  Header,
  OvertimeResume,
  OvertimeHistoric,
  OvertimeAddModal,
} from "../../components";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const CalcHoursHandle = () => {
    const {totalHorasDiurnas, totalHorasNoturnas, totalHorasDomingos} = CalcOvertimeHours(initialDate, finalDate)

    console.log(totalHorasDiurnas, totalHorasNoturnas, totalHorasDomingos)
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header title="Hi Eduardo" />
      <OvertimeResume />
      <OvertimeHistoric onPress={() => setShowAddModal(!showAddModal)} />
      <OvertimeAddModal
        show={showAddModal}
        onClose={() => setShowAddModal(!showAddModal)}
        onSubmit={() => CalcHoursHandle()}
        initialDate={initialDate}
        setInitialDate={setInitialDate}
        finalDate={finalDate}
        setFinalDate={setFinalDate}
      />
    </SafeAreaView>
  );
};

export default Home;
