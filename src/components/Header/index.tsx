import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.UserName}>{title}</Text>
    </View>
  );
};

export default Header;
