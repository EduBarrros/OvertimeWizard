import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../CustomButton";

type OvertimeAddModalProps = {
  show: boolean;
  onClose: () => void;
};

const OvertimeAddModal = ({ show, onClose }: OvertimeAddModalProps) => {
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [openInitialCalendar, setOpenInitialCalendar] = useState(false);
  const [openFinalCalendar, setOpenFinalCalendar] = useState(false);

  return (
    <Modal visible={show} animationType="slide" transparent={true}>
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <View style={styles.HeaderModal}>
            <Text style={styles.HeaderTitle}>Overtime register</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Ionicons name="close" size={32} />
            </TouchableOpacity>
          </View>
          {openInitialCalendar ? (
            <DatePicker onSelectedChange={(date) => {
              setInitialDate(date)
              setOpenInitialCalendar(false)
            }} />
          ) : openFinalCalendar ? (
            <DatePicker onSelectedChange={(date) => {
              setFinalDate(date)
              setOpenFinalCalendar(false)
            }} />
          ) : (
            <View>
              <View>
                <Text style={styles.DateTitle}>
                  Select the initial date and time:
                </Text>
                <TouchableOpacity onPress={() => setOpenInitialCalendar(true)}>
                  <Text>{initialDate ? initialDate : "__/__/__"}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.DateContainer}>
                <Text style={styles.DateTitle}>
                  Select the final date and time:
                </Text>
                <TouchableOpacity onPress={() => setOpenFinalCalendar(true)}>
                  <Text>{finalDate ? finalDate : "__/__/__"}</Text>
                </TouchableOpacity>
              </View>
              <CustomButton text="Save" onPress={() => console.log("teste") }/>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default OvertimeAddModal;
