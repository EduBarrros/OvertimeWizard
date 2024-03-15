import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

type CustomButtonProps = {
    text: string
    onPress: () => void
    disabled?: boolean
}

const CustomButton = ({text, onPress, disabled=false}: CustomButtonProps) => {
   return(
    <TouchableOpacity
        onPress={() => onPress()}
        style={styles.MainContainer}
        disabled={disabled}
    >
        <Text style={styles.MainText}>
            {text}
        </Text>
    </TouchableOpacity>
   )
};

export default CustomButton;