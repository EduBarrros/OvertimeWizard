import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.UserName}>{`Olá, ${"Eduardo"}`}</Text>
    </View>
  );
};

export default Header;
