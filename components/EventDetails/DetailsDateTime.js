import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { calendarIcon } from "../../assets/index.js";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";

export default function DetailsDateTime({dateTime}) {
  return (
    <View style={styles.dateTimeContainer}>
      <Image source={calendarIcon} style={styles.icon}/>
      <Text style={styles.label}>Date & Time:</Text>
      <Text style={styles.text}>{dateTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dateTimeContainer: {
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