import React from "react";
import { Text, View, StyleSheet } from "react-native";

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
    backgroundColor: '#ddd',  // Changed to greyscale after hi-fi test feedback
  },
  tagName: {
    fontSize: 15,
    color: '#454545',  // maintain text contrast on greyscale background
    fontWeight: 600,
  }
});