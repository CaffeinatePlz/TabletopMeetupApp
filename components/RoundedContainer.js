import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { COLOURS, RADIUS } from "../config/styleConstants";

export default function RoundedContainer(props) {
  return (
    <View>
      { props.input
        ?
          <TouchableOpacity style={[styles.roundedContainer, props.style]}>
            {props.children}
          </TouchableOpacity>
        :
          <View style={[styles.roundedContainer, props.style]}>
            {props.children}
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  roundedContainer: {
    flex: 1,
    // borderRadius: RADIUS.roundedContainer,
    borderWidth: 2,
    // borderColor: COLOURS.mediumBlue,
    // padding: 10,
  },
});