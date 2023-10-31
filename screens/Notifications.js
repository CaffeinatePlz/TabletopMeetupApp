import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function Notifications({ route, navigation  }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text accessibilityHint="Notifications">Notifications</Text>
      </View>
    );
  }