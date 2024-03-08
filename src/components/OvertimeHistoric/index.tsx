import React from "react";
import { View, Text, FlatList} from "react-native";
import styles from "./styles";

import HistoricCard from "../HistoricCard";
import OvertimeAddButton from "../OvertimeAddButton";

type OvertimeHistoricProps = {
    onPress: () => void
}

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

const OvertimeHistoric = ({onPress}: OvertimeHistoricProps) => {
    return(
        <View>
            <Text style={styles.ResumeTitle}>Overtimes</Text>
            <OvertimeAddButton onPress={onPress}/>
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