import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import RoundedButtonC from "../components/EventActionButtons/RoundedButtonC";

import { COLOURS, TEXT_SIZE } from "../config/styleConstants";

export default function Create({ route, navigation  }) {

  const eventName = "OrangeCat's Super Chill D&D Game"
  const description = "I’m running a chill Dungeons and Dragons (5th edition) one-shot to test out a new homebrew setting I wrote. Looking for 5 friendly players, some experience necessary. The story will be fun and light-hearted. Please bring your own dice and be respectful to everyone."
  const dateTime = "TBC";
  const location = "UNSW Library";
  const host = "OrangeCat";
  const entryFee = "$5";
  const gameTypeTag = "TTRPG";
  const frequencyTag = "One-Off";
  const vibeTag = "Casual";

  const press = () => {
    alert(1);
  }

  const createSampleEvent = async () => {
    try {
      const sampleEvent = {
        eventName: eventName,
        description: description,
        dateTime: dateTime,
        location: location,
        host: host,
        entryFee: entryFee,
        gameTypeTag: gameTypeTag,
        frequencyTag: frequencyTag,
        vibeTag: vibeTag,
      }
      const sampleEventJSON = JSON.stringify(sampleEvent);
      await AsyncStorage.setItem('sampleEvent', sampleEventJSON);
      // incrementKeyCounter();
      // setTextInput("");
    } catch (error) {
      alert(error + ": Couldn't save item");
    }
  };

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('sampleEvent');
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }

    console.log('Done.')
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text accessibilityHint="Create">Create</Text>
      {/* <RoundedButtonC style={styles.button} onPress={createSampleEvent}>
        <Text style={styles.buttonText}>Click me to create a sample event</Text>
      </RoundedButtonC> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 13,
    backgroundColor: COLOURS.darkBlue,
  },
  buttonText: {
    fontSize: TEXT_SIZE.bodyTextRegular,
    fontWeight: 600,
    color: COLOURS.appBackground,
  },
});