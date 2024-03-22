import React from "react";
import { TouchableOpacity} from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";


type OvertimeAddButtonProps = {
    onPress: () => void
}

const OvertimeAddButton = ({ onPress }: OvertimeAddButtonProps) => {
    return(
        <TouchableOpacity style={styles.MainContainer} onPress={() => onPress()}>
            <Ionicons name="add" size={24} color={'white'}/>
        </TouchableOpacity>
    )
};

export default OvertimeAddButton;