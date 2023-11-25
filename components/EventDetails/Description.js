import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { TEXT_SIZE, GAPS } from "../../config/styleConstants";

export default function Description({description}) {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.bodyText}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  descriptionContainer: {
    rowGap: GAPS.eventDetailsHeadingBody - 8,
  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeading,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    lineHeight: '142%',
  }
});