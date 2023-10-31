import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Settings({ route, navigation  }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text accessibilityHint="Settings">Settings</Text>
      </View>
    );
  }