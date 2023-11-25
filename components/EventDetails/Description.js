import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { TEXT_SIZE, GAPS } from "../../config/styleConstants";

export default function Description({desc}) {
  const description = "I’m running a chill Dungeons and Dragons (5th edition) one-shot to test out a new homebrew setting I wrote. Looking for 5 friendly players, some experience necessary. The story will be fun and light-hearted. Please bring your own dice and be respectful to everyone."

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.bodyText}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    rowGap: GAPS.eventDetailsHeadingBody,
  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeadings,
    fontWeight: 'bold'
  },
  bodyText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    lineHeight: '142%',
  }
});