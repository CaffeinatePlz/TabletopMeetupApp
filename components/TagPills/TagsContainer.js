import React from "react";
import { View, StyleSheet } from "react-native";

import TagPill from "./TagPill";

export default function TagsContainer({gameType, frequency, vibe}) {
  return (
    <View style={styles.tagsContainer}>
      <TagPill tagName={gameType}/>
      <TagPill tagName={frequency}/>
      <TagPill tagName={vibe}/>
    </View>
  )
}

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 9,
  },
});