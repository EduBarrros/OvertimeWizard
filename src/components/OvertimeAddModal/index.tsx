import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type OvertimeAddModalProps = {
  show: boolean;
  onClose: () => void;
};

const OvertimeAddModal = ({ show, onClose }: OvertimeAddModalProps) => {
  return (
    <Modal visible={show} animationType="slide" transparent={true}>
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={() => onClose()}>
            <Text>Teste modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OvertimeAddModal;
