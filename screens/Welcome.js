import React, { useEffect } from "react";
import { Text, Image, TouchableOpacity, View} from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export default function Welcome({ route, navigation  }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10}}>

            <Image 
                style = {{width: 400, height: 400}}
                source = {require('../assets/logo.JPG')}
            ></Image>

            <Text style = {{fontSize: 48, fontWeight: 'bold'}} accessibilityHint="Settings">Welcome To</Text>
            <Text style = {{fontSize: 48, fontWeight: 'bold'}} accessibilityHint="Settings">TableTop Meetups</Text>


            <View style = {{flex: 1, alignItems: "center", justifyContent: "start", flexDirection: "column", gap: 35, marginTop: 50}}> 

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
    );
  }