import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { RoundedButton } from "../components/RoundedButton";


export default function Login({ route, navigation  }) {
    const [state, setState] = useState({
        username: '',
        password: '',
        })

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "start", marginTop: 50}}>
            <Text style = {{fontSize: 48, fontWeight: 'bold', marginBottom: 50}} accessibilityHint="Login">Login</Text>
            <Text style = {{fontSize: 20, marginBottom: 5}} accessibilityHint="Username">Username</Text>
            <TextInput
                style = {{ marginBotton: 50, fontSize: 24, height: 50, width: screenWidth - 70, borderRadius: 10, textAlignVertical: 'center', padding: 8, paddingRight: 45, backgroundColor: '#e6e8ec' }}
                placeholder="Username"
                placeholderTextColor="#003f5c"
                //onChangeText={text => setState({email : text})}
            ></TextInput>
            <Text style = {{fontSize: 20, marginTop: 20, marginBottom: 5}} accessibilityHint="Password">Password</Text>

            <TextInput
                style = {{ marginBotton: 50, fontSize: 24, height: 50, width: screenWidth - 70, borderRadius: 10, textAlignVertical: 'center', padding: 8, paddingRight: 45, backgroundColor: '#e6e8ec' }}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#003f5c"
                //onChangeText={text => setState({password : text})}
            ></TextInput>
            <View style = {{margin: 20}}>
                <RoundedButton
                    text={"Login"}
                    textColor={"white"}
                    buttonColor={"grey"}
                    onPress={() => checkCredentials(state.username, state.password) ? navigation.navigate("Events") : alert("wrong login")}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Signup")}> 
                <Text style = {{fontSize: 20, marginBottom: 5}} accessibilityHint="Sign Up">Don't have an account? Sign Up!</Text>
            </TouchableOpacity>
            
            
        </View>
    );
  }

  function checkCredentials(username, password) {

    return true
  }