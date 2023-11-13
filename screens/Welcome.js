import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Welcome({ route, navigation  }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text accessibilityHint="Settings">Welcome</Text>
      </View>
    );
  }