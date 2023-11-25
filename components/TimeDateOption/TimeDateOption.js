import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import { COLOURS, RADIUS, TEXT_SIZE } from "../../config/styleConstants";
import Checkbox from "../Checkbox";

export default function TimeDateOption({timeDateText}) {
  return (
    <View style={styles.timeDateContainer}>
      <Checkbox/>
      <Text style={styles.timeDateText}>
        {timeDateText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timeDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  timeDateText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    marginBottom: 2,
  },
});