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
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 6,
    backgroundColor: '#ccc',  // We decided after hi-fi test feedback
                              // to make these greyscale instead of colourful
  },
  tagName: {
    fontSize: 15,
    // color: '#666'
    // fontWeight: 'bold',
  }
});