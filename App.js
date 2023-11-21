import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./screens/Settings";
import Browse from "./screens/Browse";
import Events from "./screens/Events";
import Create from "./screens/Create";
import Notifications from "./screens/Notifications"
import Profile from "./screens/Profile"


const Tabs = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const EventStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();


export default function App() {
  const EventTab = () => (
    <EventStack.Navigator> 
      <EventStack.Screen name = "Home" component={Browse} ></EventStack.Screen>
      <EventStack.Screen name = "CreateEvent" component={Create} ></EventStack.Screen>
    </EventStack.Navigator>
  )

  const NotificationTab = () =>
    <NotificationStack.Navigator>
      <NotificationStack.Screen name = "Notifications" component={Notifications}></NotificationStack.Screen>
    </NotificationStack.Navigator>

  const ProfileTabs = () => (
    <ProfileStack.Navigator> 
      <ProfileStack.Screen name = "Profile" component={Profile} ></ProfileStack.Screen>
      <ProfileStack.Screen name = "Settings" component={Settings} ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  )

  const BottomTabs = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        component={EventTab}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons 
              name={focused? "home" : "home-outline"} 
              size={size} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={NotificationTab}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons 
              name={focused? "notifications" : "notifications-outline"} 
              size={size} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileTabs}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome 
              name={focused? "user" : "user-o"} 
              size={size} 
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Events"
          component={Events}
          options={{ }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
