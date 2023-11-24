import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-web";

import TagPill from "../components/TagPill";

// import { }


export default function Events({ route, navigation  }) {

  const eventTitle = "OrangeCat's Super Chill D&D Game"


  return (
    <ScrollView style={styles.container}>

      {/* Event thumbnail */}
      <Image style={styles.eventThumbnail}/>

      {/* Event title */}
      <Text style={styles.eventTitle}>{eventTitle}</Text>

      {/* Tags list */}
      <View style={styles.tagsContainer}>
        <TagPill tagName={"TTRPG"}/>
        <TagPill tagName={"One-Off"}/>
        <TagPill tagName={"Casual"}/>

        <View>

        </View>
      </View>

      <Text accessibilityHint="Events">Events</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,

    paddingHorizontal: 35,
    paddingVertical: 20,

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