import React from "react";
import { Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import RoundedButtonC from "./RoundedButtonC";

import { COLOURS, TEXT_SIZE } from "../../config/styleConstants";

export default function EditAvailabilitiesButton({route, navigation}) {
  const sampleDateTimes = [
    "Wed 29 Nov @ 5-9pm",
    "Fri 1 Dec @ 5-9pm",
    "Sat 2 Dec @ 3-7pm",
    "Sat 2 Dec @ 6-10pm",
    "Sun 3 Dec @ 2-6pm",
    "Sun 3 Dec @ 6-10pm",
    "Wed 6 Dec @ 5-9pm",
    "Fri 8 Dec @ 5-9pm"
  ]

  const initDateTimeInStorage = async (dateTime) => {
    try {
      await AsyncStorage.setItem(dateTime, false);
    } catch (error) {
      alert(error + ": Couldn't initialise item");
    }
  }

  const initaliseAllDateTimes = async (sampleDateTimes) => {{
    sampleDateTimes.map((dateTime) => {
      initDateTimeInStorage(dateTime);
    })
  }}

  const RSVP = () => {
    clearAsyncStorage();
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