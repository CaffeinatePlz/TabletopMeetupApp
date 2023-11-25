import React from "react";
import { View, StyleSheet } from "react-native";

import TagPill from "./TagPill";

export default function TagsContainer() {
  return (
    <View style={styles.tagsContainer}>
      <TagPill tagName={"TTRPG"}/>
      <TagPill tagName={"One-Off"}/>
      <TagPill tagName={"Casual"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    columnGap: 10,
  },
});