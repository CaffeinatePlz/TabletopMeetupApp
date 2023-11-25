import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function AttendeePicture() {
  return (
    <View style={styles.container}>
      <Image style={styles.attendeePicture}/>
      <View style={styles.overlap}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  attendeePicture: {
    height: 43,   // deliberately made these bigger
    width: 43,    // for better visibility of photo
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#2d3648',
    backgroundColor: '#e2e7f0',
  },
  overlap: {
    width: 1,
    marginRight: -15,   // remember to adjust padding in AttendeesList
  }
});