import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import OptionsContainer from "../components/TimeDateOption/OptionsContainer";
import SaveAvailsButton from "../components/EventActionButtons/SaveAvailsButton";

import { COLOURS, TEXT_SIZE } from "../config/styleConstants";

export default function AddAvailabilities({route, navigation}) {

  const [availsAdded, setAvailsAdded] = useState(false);

  return (
    <ScrollView contentContainerStyle={{rowGap: 25}} style={[styles.screenContainer]}>

      <Text>{JSON.stringify(availsAdded)}</Text>

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
    borderWidth: 2,
    borderColor: 'red',
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