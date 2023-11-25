import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import RsvpButton from "../components/EventActionButtons/RsvpButton";
import AttendeesList from "../components/AttendeesList/AttendeesList";
import TagsContainer from "../components/TagPills/TagsContainer";
import EventDetails from "../components/EventDetails/EventDetails";
import Description from "../components/EventDetails/Description";
import DocumentsAssets from "../components/EventDetails/DocumentsAssets";

import { orangeCat } from "../assets";

import { COLOURS, TEXT_SIZE } from "../config/styleConstants";
import RoundedContainer from "../components/RoundedContainer";

export default function AddAvailabilities({route, navigation}) {

  // TODO:
  // - make more action buttons
  // - make availabilities screens
  // - make confirmation / joined screens
  // - pull event details from async storage

  const eventTitle = "OrangeCat's Super Chill D&D Game"
  const description = "I’m running a chill Dungeons and Dragons (5th edition) one-shot to test out a new homebrew setting I wrote. Looking for 5 friendly players, some experience necessary. The story will be fun and light-hearted. Please bring your own dice and be respectful to everyone."
  const dateTime = "TBC";
  const location = "UNSW Library";
  const host = "OrangeCat";
  const entryFee = "$5";
  const gameTypeTag = "TTRPG";
  const frequencyTag = "One-Off";
  const vibeTag = "Casual";

  return (
    <ScrollView contentContainerStyle={{rowGap: 25}} style={styles.screenContainer}>

      <Text>Add Availabilities</Text>

      <Text>Please help the host schedule the game by selecting all the times you can play.</Text>

      <RoundedContainer style={styles.optionsContainer}>




      </RoundedContainer>


      {/* Action button */}
      <RsvpButton/>



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
  optionsContainer: {
    borderWidth: 2,
    borderColor: 'red',
  },
});