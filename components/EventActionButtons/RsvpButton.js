import React from "react";
import { Text, StyleSheet } from "react-native";

import RoundedButtonC from "./RoundedButtonC";

import { COLOURS, TEXT_SIZE } from "../../config/styleConstants";

export default function RsvpButton({route, navigation}) {
  return (
    <RoundedButtonC onPress={() => navigation.navigate("Add Availabilities")}>
      <Text style={styles.buttonText}>RSVP to Event +</Text>
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