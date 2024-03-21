import {
  Header,
  OvertimeResume,
  OvertimeHistoric,
  OvertimeAddModal,
} from "../../components";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useCalcParamsStore } from "../../stores";
import { StoreData, GetData } from "../../localStorage";
import { CalcOvertimeHours, CalcOvertimeValue } from "../../service";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const CalcParams = useCalcParamsStore();

  useEffect(() => {
    GetOvertimes();
  }, []);

  const GetOvertimes = async () => {
    const Overtimes = await GetData("Overtimes");
    CalcParams.setOvertime(Overtimes);
  };

  const AddOvertimeHandler = async () => {
    const { totalHorasDiurnas, totalHorasNoturnas, totalHorasEspeciais } =
      await CalcOvertimeHours(initialDate, finalDate);

    await CalcOvertimeValue(
      initialDate,
      finalDate,
      totalHorasDiurnas,
      totalHorasEspeciais,
      totalHorasNoturnas,
      CalcParams
    );
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header title="Hi Eduardo" />
      <OvertimeResume onPress={() => setShowAddModal(!showAddModal)}/>
      <OvertimeHistoric />
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
