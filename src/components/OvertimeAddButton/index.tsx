import React from "react";
import { Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


type OvertimeAddButtonProps = {
    onPress: () => void
}

const OvertimeAddButton = ({ onPress }: OvertimeAddButtonProps) => {
    return(
        <TouchableOpacity style={styles.MainContainer} onPress={() => onPress()}>
            <Ionicons name="add-circle" size={32} color={'white'}/>
        </TouchableOpacity>
    )
};

export default OvertimeAddButton;