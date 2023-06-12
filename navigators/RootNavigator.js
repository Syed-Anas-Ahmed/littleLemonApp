import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import NewsletterScreen from "../screens/NewsletterScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Newsletter" component={NewsletterScreen} />        
      </Stack.Navigator>
    );
  };

export default RootNavigator