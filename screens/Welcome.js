import React, { useEffect } from "react";
import { Text, Image, TouchableOpacity, View, Dimensions, ScrollView} from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export default function Welcome({ route, navigation  }) {
    const screenWidth = Dimensions.get('window').width;
	const screenHeight = Dimensions.get('window').height;
    return (
		<ScrollView> 
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10}}>

            <Image 
                style = {{width: screenWidth - 120, height: screenWidth - 120}}
                source = {{ uri: 'https://cdn.dribbble.com/users/2857938/screenshots/8811617/shot-cropped-1575482748553.png'}}
            ></Image>

            <Text style = {{fontSize: 40, fontWeight: 'bold'}} accessibilityHint="Settings">Welcome To</Text>
            <Text style = {{fontSize: 40, fontWeight: 'bold'}} accessibilityHint="Settings">TableTop Meetups</Text>


            <View style = {{flex: 1, alignItems: "center", justifyContent: "start", flexDirection: "column", gap: 10, marginTop: 10}}> 
                <RoundedButton
                    text={"Login"}
                    textColor={"white"}
                    buttonColor={"grey"}
                    onPress={() => navigation.navigate("Login")}
                />
                <RoundedButton
                    text={"Signup"}
                    textColor={"white"}
                    buttonColor={"grey"}
                    onPress={() => navigation.navigate("Signup")}
                />


            </View>
        
      </View>
      </ScrollView>

    );
  }