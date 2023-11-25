import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";

export default function AssetsThumbnail({fileName}) {
  return (
    <TouchableOpacity style={styles.thumbnailContainer}>
      <Image style={styles.thumbnail}/>
      <Text style={styles.fileName}>{fileName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    rowGap: 6,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: COLOURS.mediumBlue,
    backgroundColor: COLOURS.lightBlue,
  },
  fileName: {
    width: 95,
    alignSelf: 'center',
    fontSize: TEXT_SIZE.labelText,
    textAlign: 'center',
    color: COLOURS.labelText,
  }
});