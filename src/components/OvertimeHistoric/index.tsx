import React from "react";
import { View, Text, FlatList} from "react-native";
import styles from "./styles";

import HistoricCard from "../HistoricCard";

const fakedata = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

const OvertimeHistoric = () => {
    return(
        <View>
            <Text style={styles.ResumeTitle}>Horas extras</Text>
            
            <FlatList
                data={fakedata}
                renderItem={() => <HistoricCard />}
                style={styles.List}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

export default OvertimeHistoric;