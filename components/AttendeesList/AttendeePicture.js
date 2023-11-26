import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLOURS } from "../../config/styleConstants";
import { imageIcon } from "../../assets";

export default function AttendeePicture() {
  return (
    <View style={styles.container}>
      <View style={styles.pictureFrame}>
        <Image source={imageIcon} style={styles.attendeePicture}/>
      </View>
      <View style={styles.overlap}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  pictureFrame: {
    height: 43,   // deliberately made these bigger
    width: 43,    // for better visibility of photo
    borderRadius: 40,
    borderWidth: 3,
    borderColor: COLOURS.darkBlue,
    backgroundColor: COLOURS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendeePicture: {
    height: 24,
    width: 24,
    tintColor: COLOURS.mediumBlue,
  },
  overlap: {
    width: 1,
    marginRight: -15,   // remember to adjust padding in AttendeesList
  }
});