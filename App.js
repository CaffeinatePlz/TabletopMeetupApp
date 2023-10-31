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
const Stack = createNativeStackNavigator();

export default function App() {
  const BottomTabs = () => (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Browse"
        component={Browse}
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
        component={Notifications}
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
        component={Profile}
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
          name="Create"
          component={Create}
          options={{ headerBackTitle: "Back" }}
        />
        <RootStack.Screen
          name="Events"
          component={Events}
          options={{ }}
        />
        <RootStack.Screen
          name="Settings"
          component={Settings}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
