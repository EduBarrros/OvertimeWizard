import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header = ({ title, showBackButton }: HeaderProps) => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.MainContainer}>
      {showBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} />
        </TouchableOpacity>
      ) : (
        <>
          <Text style={styles.UserName}>{title}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings" as never)}>
            <Ionicons name="settings" color='gray' size={28} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
