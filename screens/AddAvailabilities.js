import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import OptionsContainer from "../components/TimeDateOption/OptionsContainer";
import SaveAvailsButton from "../components/EventActionButtons/SaveAvailsButton";

import { COLOURS, TEXT_SIZE } from "../config/styleConstants";

export default function AddAvailabilities({route, navigation}) {
  const [availsAdded, setAvailsAdded] = useState(false);

  const [datesTimes, setDateTimes] = useState([])

  useEffect(() => {
    loadItems();
  })

  const loadItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      const stateAndStorageEqual = JSON.stringify(items) === JSON.stringify(datesTimes);
      if (items != null && (datesTimes.length == 0 || !stateAndStorageEqual)) {
        // setDateTimes(items);
      }
    } catch (error) {
      alert(error + "Couldn't load items");
    }
  }

  return (
    <ScrollView contentContainerStyle={{rowGap: 25}} style={[styles.screenContainer]}>

      {/* <Text>{JSON.stringify(availsAdded)}</Text> */}

      {/* <View>
            { datesTimes.map((key, item, blob) => (
                JSON.stringify(blob)
            ))}
          </View> */}

      <Text style={styles.screenTitle}>Add Availabilities</Text>

      <Text style={styles.instructionsText}>Please help the host schedule the game by selecting all the times you can play.</Text>

      <OptionsContainer/>

      <SaveAvailsButton navigation={navigation} setAvailsAdded={() => setAvailsAdded(true)}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 35,
    paddingVertical: 35,
  },
  screenTitle: {
    fontSize: TEXT_SIZE.screenTitle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructionsText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    textAlign: 'center',
  },
});