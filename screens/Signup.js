import React, { useEffect } from "react";
import { Text, View, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import uuid from 'react-native-uuid';

    // (str) username : {
    //   email: string
    //   password: string
    //   phoneNumber: string
    //   imagePath: path
    // }
export default function Signup({ route, navigation  }) {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [imagePath, setImagePath] = useState("");
    

    // const handleUsernameChanged = async (username) => {
    //     setUsername(username);
    //     // TODO: check username is only letters and numbers
    //     if (username.length >= 2 && username.length <= 13 && !checkUserExists(username)) {
    //         // username valid
    //     }
    // };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text accessibilityHint="Settings">Signup</Text>
            {/* <TextInput
            placeholder="Username"
            value={username}
            onChangeText={handleUsernameChanged}
            //style={styles.input}
            /> */}
        </View>
    );
}

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
