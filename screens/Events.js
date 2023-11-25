import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import RsvpButton from "../components/EventActionButtons/RsvpButton";
import AttendeesList from "../components/AttendeesList/AttendeesList";
import TagsContainer from "../components/TagPills/TagsContainer";
import EventDetails from "../components/EventDetails/EventDetails";
import Description from "../components/EventDetails/Description";
import DocumentsAssets from "../components/EventDetails/DocumentsAssets";

export default function Events({ route, navigation  }) {

  const eventTitle = "OrangeCat's Super Chill D&D Game"

  return (
    <ScrollView contentContainerStyle={{rowGap: 25}} style={styles.container}>

      {/* Event thumbnail */}
      <Image style={styles.eventThumbnail}/>

      {/* Event title */}
      <Text style={styles.title}>{eventTitle}</Text>

      {/* Tags list */}
      <TagsContainer/>

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
      <Description/>

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
    borderColor: '#717d96',
    borderRadius: 10,
    backgroundColor: '#e2e7f0',
  },
  title: {
    fontSize: 40,
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