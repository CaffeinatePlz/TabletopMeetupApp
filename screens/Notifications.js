import React, { useEffect } from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";

export default function Notifications({ route, navigation  }) {
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={{height: screenHeight}}>
            <ScrollView style={{ padding: 20, paddingLeft: 35, paddingRight: 35, flexDirection: 'column'}}>
                <View style={{borderWidth: 1, borderRadius: 10, borderColor: '#505f77' }}>
                    <View style={{flexDirection: "row"}}> 
                        <View style={{ justifyContent: "center", margin: 15, borderWidth: 1, borderRadius: 5, width: 50, height: 50, borderColor: '#505f77'}}>
                            <Text style={{textAlign: 'center' }}>Image</Text>
                        </View>
                        <Text style={{flex: 1, fontSize: 22, marginTop: 15}}>Orange Cat Game</Text>
                    </View>
                    <Text style={{fontSize: 18, margin: 15, marginTop: 0}}>Event time has changed to 01/12/13 at 3:00PM</Text>
                </View>
            </ScrollView>
        </View>
    );
  }