
import React from 'react';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/main/HomeScreen';
import ChatScreen from './pages/chat/ChatScreen';
import LoginScreen from './pages/login/LoginScreen';
import SignUpScreen from './pages/signup/SignUpScreen';

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
          <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Chat" options={{headerShown: false}} component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}

export default App;