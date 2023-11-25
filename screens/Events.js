import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import RsvpButton from "../components/EventActionButtons/RsvpButton";
import AttendeesList from "../components/AttendeesList/AttendeesList";
import TagsContainer from "../components/TagPills/TagsContainer";
import EventDetails from "../components/EventDetails/EventDetails";
import Description from "../components/EventDetails/Description";
import DocumentsAssets from "../components/EventDetails/DocumentsAssets";
import { COLOURS, TEXT_SIZE } from "../config/styleConstants";
import Test from "../components/Test/Test";

export default function Events({ route, navigation  }) {

  const eventTitle = "OrangeCat's Super Chill D&D Game"
  const description = "I’m running a chill Dungeons and Dragons (5th edition) one-shot to test out a new homebrew setting I wrote. Looking for 5 friendly players, some experience necessary. The story will be fun and light-hearted. Please bring your own dice and be respectful to everyone."
  const gameTypeTag = "TTRPG";
  const frequencyTag = "One-Off";
  const vibeTag = "Casual";

  return (
    <ScrollView contentContainerStyle={{rowGap: 25}} style={styles.container}>

      {/* Event thumbnail */}
      <Image style={styles.eventThumbnail}/>

      {/* Event title */}
      <Text style={styles.title}>{eventTitle}</Text>

      {/* Tags list */}
      <TagsContainer
        gameType={gameTypeTag}
        frequency={frequencyTag}
        vibe={vibeTag}
      />

      {/* Action button */}
      <RsvpButton/>

      {/* Attendees list */}
      <AttendeesList/>

      {/* "Attendees interested in" section removed after hi-fi tests */}

      {/* Divider */}
      <View style={styles.divider}/>

      {/* Event Details */}
      <EventDetails/>

      {/* Description */}
      <Description description={description}/>

      {/* Documents & Assets */}
      <DocumentsAssets/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'red',
    paddingHorizontal: 35,
    paddingVertical: 35,
  },
  eventThumbnail: {
    height: 250,
    width: '100%',
    borderWidth: 3,
    borderColor: COLOURS.mediumBlue,
    borderRadius: 10,
    backgroundColor: COLOURS.lightBlue,
  },
  title: {
    fontSize: TEXT_SIZE.eventPageTitle,
    fontWeight: 'bold',
    textAlign: 'center',
    // lineHeight: '150%',
  },
  divider: {
    borderWidth: 1.5,
    borderColor: '#bbb',
    // borderColor: '#717d96',
  }
});