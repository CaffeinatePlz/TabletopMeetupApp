import React from "react";
import { StyleSheet } from "react-native";

import RoundedContainer from "../RoundedContainer";
import TimeDateOption from "./TimeDateOption";

import { COLOURS, RADIUS } from "../../config/styleConstants";

export default function OptionsContainer({route, navigation}) {
  return (
    <RoundedContainer style={styles.optionsContainer} input={false}>
      <TimeDateOption timeDateText={"Wed 29 Nov @ 5-9pm"}/>
      <TimeDateOption timeDateText={"Fri 1 Dec @ 5-9pm"}/>
      <TimeDateOption timeDateText={"Sat 2 Dec @ 3-7pm"}/>
      <TimeDateOption timeDateText={"Sat 2 Dec @ 6-10pm"}/>
      <TimeDateOption timeDateText={"Sun 3 Dec @ 2-6pm"}/>
      <TimeDateOption timeDateText={"Sun 3 Dec @ 6-10pm"}/>
      <TimeDateOption timeDateText={"Wed 6 Dec @ 5-9pm"}/>
      <TimeDateOption timeDateText={"Fri 8 Dec @ 5-9pm"}/>
    </RoundedContainer>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    borderRadius: RADIUS.roundedContainerLarge,
    borderColor: COLOURS.mediumBlue,
    backgroundColor: COLOURS.lightBlue,
    rowGap: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});