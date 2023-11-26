import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";

export default function TagPill({tagName}) {
  return (
    <View style={styles.pill}>
      <Text style={styles.tagName}>{tagName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 5,
    backgroundColor: COLOURS.lightBlueBorder,  // Changed to monochrome after hi-fi test feedback
  },
  tagName: {
    fontSize: TEXT_SIZE.labelText,
    color: COLOURS.darkBlue,  // maintain text contrast on greyscale background
    fontWeight: 600,
  }
});