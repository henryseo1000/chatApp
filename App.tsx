
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import InputArea from './components/chat/InputArea';
import ChatBox from './components/chat/ChatBox';
import ChatInform from './components/chat/ChatInform';
import { ConvexProvider, ConvexReactClient, useMutation, useQuery } from 'convex/react';
import { api } from './convex/_generated/api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/main/HomeScreen';
import ChatScreen from './pages/chat/ChatScreen';
import LoginScreen from './pages/login/LoginScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  const convex = new ConvexReactClient("https://deafening-dinosaur-877.convex.cloud", {
    unsavedChangesWarning: false,
  });

  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Chat" options={{headerShown: false}} component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}

export default App;