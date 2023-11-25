import React from "react";
import { StyleSheet, View } from "react-native";

import DetailsDateTime from "./DetailsDateTime";
import DetailsLocation from "./DetailsLocation";
import DetailsHostedBy from "./DetailsHostedBy";
import DetailsEntryFee from "./DetailsEntryFee";

import { TEXT_SIZE } from "../../config/styleConstants";

export default function EventDetailsSummary({dateTime, location, host, entryFee}) {
  return (
    <View style={styles.summaryContainer}>
      <DetailsDateTime dateTime={dateTime}/>
      <DetailsLocation location={location}/>
      <DetailsHostedBy host={host}/>
      <DetailsEntryFee entryFee={entryFee}/>
    </View>
  )
}

const styles = StyleSheet.create({
  summaryContainer: {
    rowGap: 10,
  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeading,
    fontWeight: 'bold',
  },
});