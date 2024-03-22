import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";
import CustomButton from "../CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { DateTimeInfoValidator } from "../../Utils";

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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);

  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  const [startHourError, setStartHourError] = useState(false);
  const [endHourError, setEndHourError] = useState(false);

  const DatesHandler = () => {
    const StartValidator = DateTimeInfoValidator(startDate, startHour);
    const EndValidator = DateTimeInfoValidator(endDate, endHour);

    if (
      StartValidator.validDate &&
      StartValidator.validHour &&
      EndValidator.validDate &&
      EndValidator.validHour
    ) {
      setStartDateError(false);
      setStartHourError(false);
      setEndDateError(false);
      setEndHourError(false);

      const InitialDate = `${startDate} ${startHour}`;
      const EndDate = `${endDate} ${endHour}`;

      setInitialDate(InitialDate);
      setFinalDate(EndDate);
    } else {
      setStartDateError(!StartValidator.validDate);
      setStartHourError(!StartValidator.validHour);
      setEndDateError(!EndValidator.validDate);
      setEndHourError(!EndValidator.validHour);
    }
  };

  useEffect(() => {
    if (initialDate !== "" && finalDate !== "") {
      setStartDate("");
      setEndDate("");
      setStartHour("");
      setEndHour("");
      onSubmit();
    }
  }, [initialDate, finalDate]);

  return (
    <Modal
      isVisible={show}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      style={{ margin: 0, justifyContent: "flex-end" }}
      animationOutTiming={700}
      onBackdropPress={() => {
        Keyboard.dismiss();
        onClose();
        setStartDate("");
        setEndDate("");
        setStartHour("");
        setEndHour("");
        setStartDateError(false);
        setStartHourError(false);
        setEndDateError(false);
        setEndHourError(false);
      }}
      onSwipeComplete={() => {
        onClose();
        setStartDate("");
        setEndDate("");
        setStartHour("");
        setEndHour("");
        setStartDateError(false);
        setStartHourError(false);
        setEndDateError(false);
        setEndHourError(false);
      }}
      swipeDirection="down"
      avoidKeyboard={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.SubContainer}>
          <View style={styles.HeaderSwipe}/>
          <View style={styles.HeaderModal}>
            <Text style={styles.HeaderTitle}>New overtime</Text>
            <TouchableOpacity
              onPress={() => {
                onClose();
                setStartDate("");
                setEndDate("");
                setStartHour("");
                setEndHour("");
                setStartDateError(false);
                setStartHourError(false);
                setEndDateError(false);
                setEndHourError(false);
              }}
            >
              <Ionicons name="close" size={32} color={'#718096'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.StartContainer}>
            <View style={styles.StartDateContainer}>
              <Text style={styles.InputTitle}>Start date</Text>
              <TextInputMask
                style={[
                  styles.DateInput,
                  startDateError && styles.errorIndicator,
                ]}
                type="datetime"
                placeholder="00/00/0000"
                options={{
                  format: "DD/MM/YYYY",
                }}
                textAlign="center"
                maxLength={10}
                placeholderTextColor={"#718096"}
                onChangeText={(text) => setStartDate(text)}
                value={startDate}
              />
              {startDateError ? (
                <Text style={styles.ErrorText}>Invalid date</Text>
              ) : null}
            </View>
            <View style={styles.StartHourContainer}>
              <Text style={styles.InputTitle}>Start hour</Text>
              <TextInputMask
                style={[
                  styles.DateInput,
                  startHourError && styles.errorIndicator,
                ]}
                placeholder="00:00"
                maxLength={5}
                type="custom"
                options={{
                  mask: "99:99",
                }}
                textAlign="center"
                keyboardType="number-pad"
                placeholderTextColor={"#718096"}
                onChangeText={(text) => setStartHour(text)}
                value={startHour}
              />
              {startHourError ? (
                <Text style={styles.ErrorText}>Invalid hour</Text>
              ) : null}
            </View>
          </View>
          <View style={styles.EndContainer}>
            <View style={styles.EndDateContainer}>
              <Text style={styles.InputTitle}>End date</Text>
              <TextInputMask
                style={[
                  styles.DateInput,
                  endDateError && styles.errorIndicator,
                ]}
                placeholder="00/00/0000"
                type="datetime"
                textAlign="center"
                options={{
                  format: "DD/MM/YYYY",
                }}
                maxLength={10}
                placeholderTextColor={"#718096"}
                onChangeText={(text) => setEndDate(text)}
                value={endDate}
              />
              {endDateError ? (
                <Text style={styles.ErrorText}>Invalid date</Text>
              ) : null}
            </View>
            <View style={styles.EndHourContainer}>
              <Text style={styles.InputTitle}>End hour</Text>
              <TextInputMask
                style={[
                  styles.DateInput,
                  endHourError && styles.errorIndicator,
                ]}
                placeholder="00:00"
                maxLength={5}
                keyboardType="number-pad"
                type="custom"
                options={{
                  mask: "99:99",
                }}
                textAlign="center"
                placeholderTextColor={"#718096"}
                onChangeText={(text) => setEndHour(text)}
                value={endHour}
              />
              {endHourError ? (
                <Text style={styles.ErrorText}>Invalid hour</Text>
              ) : null}
            </View>
          </View>
          <CustomButton text="Save" onPress={() => DatesHandler()} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OvertimeAddModal;
