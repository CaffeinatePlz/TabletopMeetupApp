import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Create({ route, navigation  }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text accessibilityHint="Create">Create</Text>
      </View>
    );
  }