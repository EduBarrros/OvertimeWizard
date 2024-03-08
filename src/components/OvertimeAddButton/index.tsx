import React from "react";
import { Text, TouchableOpacity} from "react-native";
import styles from "./styles";

type OvertimeAddButtonProps = {
    onPress: () => void
}

const OvertimeAddButton = ({ onPress }: OvertimeAddButtonProps) => {
    return(
        <TouchableOpacity style={styles.MainContainer} onPress={() => onPress()}>
            <Text style={styles.MainText}>
                Adicionar
            </Text>
        </TouchableOpacity>
    )
};

export default OvertimeAddButton;