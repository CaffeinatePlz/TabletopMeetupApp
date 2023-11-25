import React from "react";
import { Text, StyleSheet, View } from "react-native";

import EventDetailsSummary from "./EventDetailsSummary";

import { TEXT_SIZE, GAPS } from "../../config/styleConstants";

export default function EventDetails({dateTime, location, host, entryFee}) {

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.heading}>Event Details</Text>
      <EventDetailsSummary
        dateTime={dateTime}
        location={location}
        host={host}
        entryFee={entryFee}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    rowGap: GAPS.eventDetailsHeadingBody,
  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeading,
    fontWeight: 'bold',
  },
});