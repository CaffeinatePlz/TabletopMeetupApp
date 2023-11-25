import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLOURS, TEXT_SIZE } from "../../config/styleConstants";

export default function RsvpButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>RSVP to Event +</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 13,
    backgroundColor: COLOURS.darkBlue,
  },
  buttonText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    fontWeight: 'bold',
    color: COLOURS.appBackground,
  },
});