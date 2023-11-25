import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { mapPinIcon } from "../../assets/index.js";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";

export default function DetailsLocation({location}) {
  return (
    <View style={styles.locationContainer}>
      <Image source={mapPinIcon} style={styles.icon}/>
      <Text style={styles.label}>Location:</Text>
      <Text style={styles.text}>{location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    color: COLOURS.darkBlue,
    fontSize: TEXT_SIZE.bodyTextRegular,
    marginLeft: 11,
    marginRight: 7,
    marginBottom: 2,
    fontWeight: 600,
  },
  text: {
    color: COLOURS.darkBlue,
    fontSize: TEXT_SIZE.bodyTextRegular,
    marginBottom: 2,
  },
});