import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { TEXT_SIZE } from "../../config/styleConstants";


export default function EventDetails() {
  return (
    <View style={styles.detailsContainer}>
        <Text style={styles.heading}>Event Details</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {

  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeadings,
    fontWeight: 'bold'
  },
});