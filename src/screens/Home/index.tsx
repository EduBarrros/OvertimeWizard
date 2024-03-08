import React from "react";
import { Text, SafeAreaView } from "react-native";
import { Header, OvertimeResume, OvertimeHistoric } from "../../components";

const Home = () => {
  return (
    <SafeAreaView>
      <Header title="Olá Eduardo" />
      <OvertimeResume />
      <OvertimeHistoric />
    </SafeAreaView>
  );
};

export default Home;
