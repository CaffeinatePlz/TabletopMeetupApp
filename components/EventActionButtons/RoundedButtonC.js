import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { COLOURS } from "../../config/styleConstants";

export default function RoundedButtonC(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {props.children}
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
});