import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { TEXT_SIZE, GAPS } from "../../config/styleConstants";


export default function DocumentsAssets() {
  return (
    <View style={styles.assetsContainer}>
      <Text style={styles.heading}>Documents & Assets</Text>
      <View style={styles.thumbnailsContainer}>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  assetsContainer: {
    rowGap: GAPS.eventDetailsHeadingBody,
  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeading,
    fontWeight: 'bold',
  },
});