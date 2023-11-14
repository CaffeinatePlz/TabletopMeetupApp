import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput, Dimensions } from "react-native";

export default function Browse({ route, navigation  }) {
	const screenWidth = Dimensions.get('window').width;

    return (
		<View style={{ flex: 1, padding: 20 }}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'top'}}>
				<TextInput
					style = {{ flex: 1, fontSize: 24, width: screenWidth - 70, borderWidth: 1, borderRadius: 10, padding: 8 }}
					placeholder="Search for a game"
				/>
			</View>
			<View style={{ flex: 0, alignItems: "center", justifyContent: "top" }}>
				<Text accessibilityHint="Browse">Browse New Changes Page</Text>
				<View style = {{flex: 1, alignItems: "left", justifyContent: "start", flexDirection: "row",  marginLeft: 100}}> 
				<TouchableOpacity onPress={() => navigation.navigate("CreateEvent")}> 
					<View style = {{flex: 1, alignItems: "left", justifyContent: "start", flexDirection: "row"}}> 
					<Text style={{fontSize: 24, marginRight: 80, }}>Click Here for Event Creation Page</Text>
					</View>
				</TouchableOpacity>
				</View>
			</View>
		</View>
      
    );
  }