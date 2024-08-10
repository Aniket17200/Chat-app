// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScree from './Component/ChatScree';
import AuthScreen from './Component/AuthScreen';
const Stack = createStackNavigator();

const Appj = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Chat" component={ChatScree} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appj;
