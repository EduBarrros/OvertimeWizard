import React from "react";
import styles from "./styles";
import { useCalcParamsStore } from "../../stores";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, FlatList, ListRenderItem } from "react-native";

import HistoricCard from "../HistoricCard";

type Overtime = {
  hours: number;
  value: number;
  initDate: string;
  endDate: string;
};

const OvertimeHistoric = () => {
  const CalcParams = useCalcParamsStore();

  const RenderItem: ListRenderItem<Overtime> = ({ item }) => (
    <HistoricCard
      hours={item.hours}
      value={item.value}
      initDate={item.initDate}
      endDate={item.endDate}
    />
  );

  const EmptyComponent = () => {
    return (
      <View style={styles.EmptyMainContainer}>
        <Ionicons name="search" color={"#021867"} size={40} />
        <Text style={styles.EmptyTitle}>
          You do not have overtime hours registered
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={CalcParams.Overtimes}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyComponent />}
      />
    </View>
  );
};

export default OvertimeHistoric;
