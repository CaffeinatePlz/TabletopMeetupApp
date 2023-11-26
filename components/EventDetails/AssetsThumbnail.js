import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { TEXT_SIZE, COLOURS } from "../../config/styleConstants";
import { pdfThumbnail } from "../../assets";

export default function AssetsThumbnail({fileName}) {
  return (
    <TouchableOpacity style={styles.thumbnailContainer}>
      <Image source={pdfThumbnail} style={styles.thumbnail}/>
      <Text style={styles.fileName}>{fileName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    rowGap: 6,
    width: 100,
    height: 100,
  },
  thumbnail: {
    width: 60,
    height: 74,
    alignSelf: 'center',
  },
  fileName: {
    width: 95,
    alignSelf: 'center',
    fontSize: TEXT_SIZE.labelText,
    textAlign: 'center',
    color: COLOURS.labelText,
  }
});