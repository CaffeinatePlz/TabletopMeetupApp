import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import RsvpButton from "../components/EventActionButtons/RsvpButton";
import AttendeesList from "../components/AttendeesList/AttendeesList";
import TagsContainer from "../components/TagPills/TagsContainer";
import EventDetails from "../components/EventDetails/EventDetails";
import Description from "../components/EventDetails/Description";
import DocumentsAssets from "../components/EventDetails/DocumentsAssets";

import { orangeCat } from "../assets";

import { COLOURS, TEXT_SIZE } from "../config/styleConstants";

export default function Events({route, navigation}) {

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
    <ScrollView contentContainerStyle={{rowGap: 22}} style={styles.screenContainer}>

      {/* Event thumbnail */}
      <Image source={orangeCat} style={styles.eventThumbnail}/>

      {/* Event title */}
      <Text style={styles.title}>{eventTitle}</Text>

      {/* Tags list */}
      <TagsContainer
        gameType={gameTypeTag}
        frequency={frequencyTag}
        vibe={vibeTag}
      />

      {/* Action button */}
      <RsvpButton navigation={navigation}/>

      {/* Attendees list */}
      <AttendeesList/>

      {/* "Attendees interested in" section removed after hi-fi tests */}

      {/* Event Details */}
      <EventDetails
        dateTime={dateTime}
        location={location}
        host={host}
        entryFee={entryFee}
      />

      {/* Description */}
      <Description description={description}/>

      {/* Documents & Assets */}
      <DocumentsAssets/>

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
  eventThumbnail: {
    height: 250,
    width: '100%',
    borderWidth: 4,
    borderColor: COLOURS.darkBlue,
    borderRadius: 10,
    backgroundColor: COLOURS.lightBlue,
  },
  title: {
    fontSize: TEXT_SIZE.eventPageTitle,
    fontWeight: 'bold',
    textAlign: 'center',
    // lineHeight: '150%',
  },
});