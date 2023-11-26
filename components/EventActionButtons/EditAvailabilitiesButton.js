import React from "react";
import { Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import RoundedButtonC from "./RoundedButtonC";

import { COLOURS, TEXT_SIZE } from "../../config/styleConstants";

export default function EditAvailabilitiesButton({route, navigation}) {
  const RSVP = () => {
    // clearAsyncStorage();
    // initaliseAllDateTimes();
    navigation.navigate("Add Availabilities");
  }

  const clearAsyncStorage = async() => {
    AsyncStorage.clear();
  }

  return (
    <RoundedButtonC onPress={RSVP}>
      <Text style={styles.buttonText}>Edit Availabilities</Text>
    </RoundedButtonC>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    fontWeight: 'bold',
    color: COLOURS.appBackground,
  },
});