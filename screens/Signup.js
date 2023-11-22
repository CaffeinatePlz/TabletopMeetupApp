import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, TextInput, TouchableOpacity} from "react-native";
import { RoundedButton } from "../components/RoundedButton";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup({ route, navigation  }) {
    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
        })
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return ( 
    <View style={{ flex: 1, alignItems: "center", justifyContent: "start", marginTop: 50}}>
        <Text style = {{fontSize: 48, fontWeight: 'bold', marginBottom: 50}} accessibilityHint="Sign Up">Sign Up</Text>
        <Text style = {{fontSize: 20, marginBottom: 5}} accessibilityHint="Email Address">Email Address</Text>
        
        <TextInput
            style = {{ marginBotton: 50, fontSize: 24, height: 50, width: screenWidth - 70, borderRadius: 10, textAlignVertical: 'center', padding: 8, paddingRight: 45, backgroundColor: '#e6e8ec' }}
            placeholder="Email Address"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({email : text})}
        ></TextInput>

        
        <Text style = {{fontSize: 20, marginTop: 20, marginBottom: 5}} accessibilityHint="Username">Username</Text>
        <TextInput
            style = {{ marginBotton: 50, fontSize: 24, height: 50, width: screenWidth - 70, borderRadius: 10, textAlignVertical: 'center', padding: 8, paddingRight: 45, backgroundColor: '#e6e8ec' }}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({username : text})}
        ></TextInput>
        <Text style = {{fontSize: 20, marginTop: 20, marginBottom: 5}} accessibilityHint="Password">Password</Text>
        <TextInput
            style = {{ marginBotton: 50, fontSize: 24, height: 50, width: screenWidth - 70, borderRadius: 10, textAlignVertical: 'center', padding: 8, paddingRight: 45, backgroundColor: '#e6e8ec' }}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({password : text})}
        ></TextInput>
        <Text style = {{fontSize: 20, marginTop: 20, marginBottom: 5}} accessibilityHint="Confirm Password">Confirm Password</Text>
        <TextInput
            style = {{ marginBotton: 50, fontSize: 24, height: 50, width: screenWidth - 70, borderRadius: 10, textAlignVertical: 'center', padding: 8, paddingRight: 45, backgroundColor: '#e6e8ec' }}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({confirmPassword : text})}
        ></TextInput>

        <View style = {{margin: 20}}>
            <RoundedButton
                text={"Sign Up"}
                textColor={"white"}
                buttonColor={"grey"}
                onPress={ () => navigation.navigate("Login")}
                //onPress={() => checkCredentials(state.username, state.password) ? navigation.navigate("Events") : alert("wrong login")}
            />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}> 
            <Text style = {{fontSize: 20, marginBottom: 5}} accessibilityHint="Sign Up">Already have an account? Log in!</Text>
        </TouchableOpacity>
    </View>
    )
}

function checkMatchingPassword(password, confirmPassword) {
    return password == confirmPassword;
}


// import uuid from 'react-native-uuid';

    // (str) username : {
    //   email: string
    //   password: string
    //   phoneNumber: string
    //   imagePath: path
    // }
// export default function Signup({ route, navigation  }) {
//     // const [username, setUsername] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("");
//     // const [phoneNumber, setPhoneNumber] = useState("");
//     // const [imagePath, setImagePath] = useState("");
    

//     // const handleUsernameChanged = async (username) => {
//     //     setUsername(username);
//     //     // TODO: check username is only letters and numbers
//     //     if (username.length >= 2 && username.length <= 13 && !checkUserExists(username)) {
//     //         // username valid
//     //     }
//     // };

//     return (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text accessibilityHint="Settings">Signup</Text>
//             {/* <TextInput
//             placeholder="Username"
//             value={username}
//             onChangeText={handleUsernameChanged}
//             //style={styles.input}
//             /> */}
//         </View>
//     );
// }

// function createNewUserObject(email, password, phoneNumber, imagePath) {
//     let newUser = {
//         email: email, 
//         password: password,
//         phoneNumber: phoneNumber,
//         imagePath: imagePath
//     }
//     return newUser
// }

// async function createNewUser(username, userData) {
//     // var newUUID = uuid.v4();
    
//     _storeData = async () => {
//         try {
//             await AsyncStorage.setItem(
//                 username,
//                 JSON.stringify(userData)
//             );
//         } catch (error) {
//             // Error saving data
//         }
//     };
// }


// async function checkUserExists(username) {
//     _retrieveData = async () => {
//         try {
//             const value = await AsyncStorage.getItem(username);
//             if (value !== null) {
//                 return true;
//             } else {
//                 // user does not exist
//                 return false;
//             }
//         } catch (error) {
//         // Error retrieving data
//         }
//     };
// }
