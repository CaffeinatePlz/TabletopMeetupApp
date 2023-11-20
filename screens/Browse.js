import React, { useEffect } from "react";
import { Text, TouchableOpacity, ScrollView, View, TextInput, Dimensions } from "react-native";
import { FlatList } from "react-native-web";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Browse({ route, navigation  }) {
	const screenWidth = Dimensions.get('window').width;
	const screenHeight = Dimensions.get('window').height;

    return (
		<View style={{height: screenHeight}}>
			<ScrollView style={{ padding: 20, paddingLeft: 35, paddingRight: 35, flexDirection: 'column', zIndex: 1 }}>
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
					<TextInput
						style = {{ fontSize: 24, height: 30, width: screenWidth - 70, borderWidth: 1, borderRadius: 10, padding: 20 }}
						placeholder="Search"
					/>
					<Ionicons name="search-outline" size={24} color="black" style={{ position: 'absolute', right: 10 , top: 8}}/>
				</View>
				<View style={{ paddingBottom: 20, alignItems: "center",  flexDirection: 'row', justifyContent: 'center'}}>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', borderWidth:1, padding: 8, paddingLeft: 20, paddingRight: 20, borderRadius: 10}}>
						<Text style={{textAlign: 'center', textAlignVertical: 'center',}}>Game</Text>
						<Ionicons name="chevron-down-outline" size={18} color="black" />
					</View>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',  borderWidth:1, marginLeft: 10, marginRight: 10, padding: 8, paddingLeft: 20, paddingRight: 20, borderRadius: 10, minWidth: 90}}>
						<Text style={{textAlign: 'center', textAlignVertical: 'center',}}>Commitment</Text>
						<Ionicons name="chevron-down-outline" size={18} color="black" />
					</View>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', borderWidth:1, padding: 8, paddingLeft: 20, paddingRight: 20, borderRadius: 10 }}>
						<Text style={{textAlign: 'center', textAlignVertical: 'center',}}>Vibe</Text>
						<Ionicons name="chevron-down-outline" size={18} color="black" />
					</View>
				</View>
				<View style={{ alignItems: "center", justifyContent: 'center', borderWidth: 1, borderRadius: 10 }}>
					<View style= {{ justifyContent: 'center', width: '100%', height: 200, borderWidth: 1, padding: 20, borderRadius: 10, marginBottom: 10 }}>
						<Text style={{ textAlign: 'center' }}>Image Here</Text>
					</View>
					<View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, width: '100%', alignItems: "left", justifyContent: 'center'}}>
						<Text style={{fontSize: 20, opacity: 0.75, marginBottom: 5}}>
							Date and time
						</Text>
						<Text style={{fontSize: 26 , marginBottom: 5}}>
							Orange cat game
						</Text>
						<View style={{flexDirection: 'row', marginBottom: 5}}>
							<Ionicons name="location-outline" size={24} color="black" />
							<Text style={{fontSize: 18, marginLeft: 5}}>
								location
							</Text>
						</View>
						<View style={{flexDirection: 'row', marginBottom: 5}}>
							<Ionicons name="person-circle-outline" size={24} color="black" />
							<Text style={{fontSize: 18, marginLeft: 5}}>
								host
							</Text>
						</View>
						<View style={{ flexDirection: 'row'}}>
							<View style={{ borderWidth: 1, borderRadius: 5, padding: 3, margin: 3}}>
								<Text>tags</Text>
							</View>
							<View style={{ borderWidth: 1, borderRadius: 5, padding: 3, margin: 3}}>
								<Text>tags</Text>
							</View>
							<View style={{ borderWidth: 1, borderRadius: 5, padding: 3, margin: 3}}>
								<Text>tags</Text>
							</View>
						</View>
					</View>
					<View style={{alignItems: "center", justifyContent: 'center', width: '85%', height: 40, borderWidth: 1, borderRadius: 5, marginBottom: 20}}>
						<Text style={{ textAlign: 'center' }}>View Details</Text>
					</View>
				</View>
			</ScrollView>
			<TouchableOpacity onPress={() => navigation.navigate("CreateEvent")}> 
				<View style={{ alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: 30, borderWidth: 1, position: 'absolute', bottom: 200, right: 25, zIndex: 2}}>
					<Ionicons name="add-outline" size={40} color="black" />
				</View>	
			</TouchableOpacity>
		</View>
      
    );
  }