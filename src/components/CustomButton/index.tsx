import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

type CustomButtonProps = {
    text: string
    onPress: () => void
}

const CustomButton = ({text, onPress}: CustomButtonProps) => {
   return(
    <TouchableOpacity
        onPress={() => onPress()}
        style={styles.MainContainer}
    >
        <Text style={styles.MainText}>
            {text}
        </Text>
    </TouchableOpacity>
   )
};

export default CustomButton;