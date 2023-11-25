import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { dollarSignIcon } from "../../assets/index.js";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";

export default function DetailsEntryFee({entryFee}) {
  return (
    <View style={styles.entryFeeContainer}>
      <Image source={dollarSignIcon} style={styles.icon}/>
      <Text style={styles.label}>Entry fee:</Text>
      <Text style={styles.text}>{entryFee}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  entryFeeContainer: {
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