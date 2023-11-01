import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Browse({ route, navigation  }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text accessibilityHint="Browse" style= {{margin: 60}}>Browse Page</Text>
        
        <View style = {{flex: 1, alignItems: "left", justifyContent: "start", flexDirection: "row",  marginLeft: 100}}> 
          <TouchableOpacity onPress={() => navigation.navigate("CreateEvent")}> 
            <View style = {{flex: 1, alignItems: "left", justifyContent: "start", flexDirection: "row"}}> 
              <Text style={{fontSize: 24, marginRight: 80, }}>Click Here for Event Creation Page</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }