import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { smileyFaceIcon } from "../../assets/index.js";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";

export default function DetailsHostedBy({host}) {
  return (
    <View style={styles.hostedByContainer}>
      <Image source={smileyFaceIcon} style={styles.icon}/>
      <Text style={styles.label}>Hosted by:</Text>
      <Text style={styles.text}>{host}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  hostedByContainer: {
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