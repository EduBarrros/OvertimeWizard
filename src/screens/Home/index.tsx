import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import {
  Header,
  OvertimeResume,
  OvertimeHistoric,
  OvertimeAddModal,
} from "../../components";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header title="Hi Eduardo" />
      <OvertimeResume />
      <OvertimeHistoric onPress={() => setShowAddModal(!showAddModal)}/>
      <OvertimeAddModal show={showAddModal} onClose={() => setShowAddModal(!showAddModal)}/>
    </SafeAreaView>
  );
};

export default Home;
