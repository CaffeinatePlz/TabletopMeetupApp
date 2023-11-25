import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { COLOURS, RADIUS } from "../config/styleConstants";

export default function Checkbox(props) {

  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={[styles.checkbox,
        checked
          ? styles.checkboxTicked
          : undefined
      ]}
    >
      { checked
        ? <Text style={styles.checkmark}>✔</Text>
        : null
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: COLOURS.mediumBlue,
    backgroundColor: COLOURS.appBackground,
    alignItems: 'center',
  },
  checkboxTicked: {
    backgroundColor: COLOURS.darkBlue,
    borderWidth: 0,
  },
  checkmark: {
    color: COLOURS.appBackground,
  },
});