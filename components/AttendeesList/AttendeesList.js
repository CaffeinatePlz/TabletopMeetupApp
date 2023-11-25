import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AttendeePicture from "./AttendeePicture";
import { TEXT_SIZE } from "../../config/styleConstants";

export default function AttendeesList() {
  return (
    <View style={styles.listContainer}>
      <View style={styles.picturesContainer}>
        <AttendeePicture/>
        <AttendeePicture/>
        <AttendeePicture/>
        <AttendeePicture/>
        <AttendeePicture/>
      </View>
      <Text style={styles.attendeesNumber}>
        5 people attending
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    // borderWidth: 2,
    rowGap: 10,
  },
  picturesContainer: {
    alignSelf: 'center',
    // borderWidth: 2,
    flexDirection: 'row-reverse',
    paddingRight: 15,
  },
  attendeesNumber: {
    textAlign: 'center',
    fontSize: TEXT_SIZE.bodyTextSmall,
    // color: '#555'
    // color: '#2d3648'
  }
});