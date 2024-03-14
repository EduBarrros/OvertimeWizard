import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../CustomButton";
import Modal from "react-native-modal";

type OvertimeAddModalProps = {
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
  initialDate: string;
  setInitialDate: (date: string) => void;
  finalDate: string;
  setFinalDate: (date: string) => void;
};

const OvertimeAddModal = ({
  show,
  onClose,
  onSubmit,
  initialDate,
  setInitialDate,
  finalDate,
  setFinalDate,
}: OvertimeAddModalProps) => {
  const [openInitialCalendar, setOpenInitialCalendar] = useState(false);
  const [openFinalCalendar, setOpenFinalCalendar] = useState(false);

  return (
    <Modal
      isVisible={show}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      style={{ margin: 0 }}
      animationOutTiming={700}
    >
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <View style={styles.HeaderModal}>
            <Text style={styles.HeaderTitle}>Overtime register</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Ionicons name="close" size={32} />
            </TouchableOpacity>
          </View>
          {openInitialCalendar ? (
            <DatePicker
              onSelectedChange={(date) => {
                setInitialDate(date);
                setOpenInitialCalendar(false);
              }}
            />
          ) : openFinalCalendar ? (
            <DatePicker
              onSelectedChange={(date) => {
                setFinalDate(date);
                setOpenFinalCalendar(false);
              }}
            />
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => setOpenInitialCalendar(true)}
                style={styles.DateSelect}
              >
                <Text style={styles.DateSelectText}>
                  {initialDate ? initialDate : "Select the initial date"}
                </Text>
              </TouchableOpacity>
              {initialDate ? (
                <TouchableOpacity
                  onPress={() => setOpenFinalCalendar(true)}
                  style={styles.DateSelect}
                >
                  <Text style={styles.DateSelectText}>
                    {finalDate ? finalDate : "Select the final date"}
                  </Text>
                </TouchableOpacity>
              ) : null}
              {initialDate && finalDate !== "" ? (
                <CustomButton text="Save" onPress={() => onSubmit()} />
              ) : null}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default OvertimeAddModal;
