import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import MatchesScreen from "./screens/MatchesScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import FindMatchScreen from "./screens/FindMatchScreen";
import ChatScreen from "./screens/ChatScreen";
import { MatchProvider } from './contexts/MatchContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MatchProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Matches" component={MatchesScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="FindMatchScreen" component={FindMatchScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </MatchProvider>
  );
}
