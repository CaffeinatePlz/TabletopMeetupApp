import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import TagPill from "../components/TagPill";
import RsvpButton from "../components/EventActionButtons/RsvpButton";

export default function Events({ route, navigation  }) {

  const eventTitle = "OrangeCat's Super Chill D&D Game"

  return (
    <ScrollView contentContainerStyle={{rowGap: 5}} style={styles.container}>

      {/* Event thumbnail */}
      <Image style={styles.eventThumbnail}/>

      {/* Event title */}
      <Text style={styles.eventTitle}>{eventTitle}</Text>

      {/* Tags list */}
      <View style={styles.tagsContainer}>
        <TagPill tagName={"TTRPG"}/>
        <TagPill tagName={"One-Off"}/>
        <TagPill tagName={"Casual"}/>
      </View>

      {/* Action button */}
      <RsvpButton/>



      <Text accessibilityHint="Events">Events</Text>
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
    // alignItems: "center",
    // justifyContent: "center"
  },

  eventThumbnail: {
    height: 250,
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
  },
  eventTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '150%',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    // borderWidth: 2,
    columnGap: 10,
  }


});