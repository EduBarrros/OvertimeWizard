import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  Header,
  OvertimeResume,
  OvertimeHistoric,
  OvertimeAddModal,
} from "../../components";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <SafeAreaView>
      <Header title="Hi Eduardo" />
      <OvertimeResume />
      <OvertimeHistoric onPress={() => setShowAddModal(!showAddModal)}/>
      <OvertimeAddModal show={showAddModal} onClose={() => setShowAddModal(!showAddModal)}/>
    </SafeAreaView>
  );
};

export default Home;
