import React from "react";
import { View, Text, FlatList, ListRenderItem} from "react-native";
import styles from "./styles";
import { useCalcParamsStore } from "../../stores";

import HistoricCard from "../HistoricCard";
import OvertimeAddButton from "../OvertimeAddButton";

type OvertimeHistoricProps = {
    onPress: () => void
}

type Overtime = {
    hours: number
    value: number
    initDate: string
    endDate: string
  }

const OvertimeHistoric = ({onPress}: OvertimeHistoricProps) => {

    const CalcParams = useCalcParamsStore();

    const renderItem: ListRenderItem<Overtime> = ({ item }) => (
        <HistoricCard hours={item.hours} value={item.value} initDate={item.initDate} endDate={item.endDate} />
      );

    return(
        <View>
            <Text style={styles.ResumeTitle}>Overtimes</Text>
            <OvertimeAddButton onPress={onPress}/>
            <FlatList
                data={CalcParams.Overtimes}
                renderItem={renderItem}
                style={styles.List}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

export default OvertimeHistoric;