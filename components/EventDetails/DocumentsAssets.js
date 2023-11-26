import React from "react";
import { Text, StyleSheet, View } from "react-native";

import AssetsThumbnail from "./AssetsThumbnail";

import { TEXT_SIZE, GAPS } from "../../config/styleConstants";

export default function DocumentsAssets() {
  return (
    <View style={styles.assetsContainer}>
      <Text style={styles.heading}>Documents & Assets</Text>
      <View style={styles.thumbnailsContainer}>
        <AssetsThumbnail fileName={"Rulebook.pdf"}/>
        <AssetsThumbnail fileName={"Setting.pdf"}/>
        <AssetsThumbnail fileName={"CharSheet.pdf"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  assetsContainer: {
    rowGap: GAPS.eventDetailsHeadingBody + 8,
  },
  heading: {
    fontSize: TEXT_SIZE.eventPageHeading,
    fontWeight: 'bold',
  },
  thumbnailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    columnGap: 20,
  },
});