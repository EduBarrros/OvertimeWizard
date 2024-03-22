import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useCalcParamsStore } from "../../stores";
import Ionicons from "@expo/vector-icons/Ionicons";
import moment from "moment";
import { View, Text, FlatList, ListRenderItem, TouchableOpacity } from "react-native";

import HistoricCard from "../HistoricCard";

type Overtime = {
  hours: number;
  value: number;
  initDate: string;
  endDate: string;
};

const OvertimeHistoric = () => {
  const CalcParams = useCalcParamsStore();
  const [sortType, setSortType] = useState('newest')

  const RenderItem: ListRenderItem<Overtime> = ({ item }) => (
    <HistoricCard
      hours={item.hours}
      value={item.value}
      initDate={item.initDate}
      endDate={item.endDate}
    />
  );

  useEffect(() => {
    if(sortType === 'newest'){
      CalcParams.setOvertime(CalcParams.Overtimes.sort((a: any, b: any) => moment(b.initDate, 'DD/MM/YYYY HH:mm').valueOf() - moment(a.initDate, 'DD/MM/YYYY HH:mm').valueOf()));
    }else{
      CalcParams.setOvertime(CalcParams.Overtimes.sort((a: any, b: any) => moment(a.initDate, 'DD/MM/YYYY HH:mm').valueOf() - moment(b.initDate, 'DD/MM/YYYY HH:mm').valueOf()));
    }
  }, [sortType])

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
      {CalcParams?.Overtimes?.length > 0 ? (
        <View style={styles.OrderHeader}>
          <TouchableOpacity style={styles.IconOrder} onPress={() => setSortType((prevState) => prevState === 'newest' ? 'oldest' : 'newest')}>
            <Ionicons name="funnel" color={"#021867"} size={18} />
            <Text style={styles.OrderText}>{sortType === 'newest' ? 'Sort by newest' : 'Sort by oldest'}</Text>
          </TouchableOpacity>
          <Text style={styles.ItensCounter}>
            {CalcParams.Overtimes.length} itens
          </Text>
        </View>
      ) : null}
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
