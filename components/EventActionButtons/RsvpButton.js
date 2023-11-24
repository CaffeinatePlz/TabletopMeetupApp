import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

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
    backgroundColor: '#2d3648',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});