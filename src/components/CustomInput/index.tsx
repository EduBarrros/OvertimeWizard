import React from "react";
import styles from "./styles";
import { Text, TextInput, View } from "react-native";

type CustomInputProps = {
  title: string;
  defaultValue: string;
  onChangeText: (text: string) => void
};

const CustomInput = ({ title, defaultValue, onChangeText }: CustomInputProps) => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.InputTitle}>{title}</Text>
      <TextInput style={styles.InputContainer} defaultValue={defaultValue} onChangeText={(text: string) => onChangeText(text)}/>
    </View>
  );
};

export default CustomInput;
