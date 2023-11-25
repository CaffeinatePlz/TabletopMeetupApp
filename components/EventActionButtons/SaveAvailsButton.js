import React from "react";
import { Text, StyleSheet } from "react-native";

import RoundedButtonC from "./RoundedButtonC";

import { COLOURS, TEXT_SIZE } from "../../config/styleConstants";

export default function SaveAvailsButton({navigation}) {
  return (
    <RoundedButtonC
      style={styles.button}
      onPress={() => navigation.navigate("Events")}
    >
      <Text style={styles.buttonText}>Save & RSVP  ➜</Text>
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