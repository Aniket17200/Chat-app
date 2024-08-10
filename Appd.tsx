import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './Component/HomeScreen';
import ChatScreen from './Component/ChatScreen';
import ChatDetailScreen from './Component/ChatDetailScreen';
import App from './App';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatList" component={ChatScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Appd() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName:string = 'default-icon';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Chat') {
            iconName = 'comments';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'blue',
        
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={App} options={{ headerShown: false }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
