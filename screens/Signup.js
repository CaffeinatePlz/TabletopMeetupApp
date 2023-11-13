import React, { useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

export default function Signup({ route, navigation  }) {
    const [username, setUsername] = useState("");

    const handleUsernameChanged = async (username) => {
        setUsername(username);
        // TODO: check username is only letters and numbers
        if ((username.length >= 2 || username.length <= 13) && !checkUserExists(username)) {
            // username valid
        }
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text accessibilityHint="Settings">Signup</Text>
            <TextInput
            placeholder="Username"
            value={username}
            onChangeText={handleUsernameChanged}
            style={styles.input}
            />
        </View>
    );
  }

    // user: {
    //   userId: uuid.v4(),
    //   email: string
    //   username: string
    //   password: string
    //   phoneNumber: string
    //   image: path
    // }
function createNewUserObject(email, username, password, phoneNumber, imagePath) {
    let newUser = {
        email: email, 
        username: username,
        password: password,
        phoneNumber: phoneNumber,
        imagePath: imagePath
    }
    return newUser
}

async function createNewUser(newUser) {
    var newUUID = uuid.v4();
    
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                newUUID,
                JSON.stringify(newUser),
            );
        } catch (error) {
            // Error saving data
        }
      };
}

// TODO: Check if user exists

async function checkUserExists(username) {
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    }
}
