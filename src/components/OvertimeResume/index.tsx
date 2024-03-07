import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const OvertimeResume = () => {
  return (
    <>
    <Text style={styles.ResumeTitle}>Resumo do mês:</Text>
    <View style={styles.MainContainer}>
      <View style={styles.SubContainer}>
        <View>
          <Text>Horas executadas</Text>
          <Text>92 Horas</Text>
        </View>
        <View>
          <Text>Valor recebido</Text>
          <Text>92 reais</Text>
        </View>
      </View>
    </View>
    </>
  );
};

export default OvertimeResume;
