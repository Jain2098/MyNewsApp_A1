import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import { Ionicons } from '@expo/vector-icons';
import SinglePost from './components/SinglePost';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="Parent" component={Parent} options={{headerShown: false}} />
            <Stack.Screen name="Single" component={SinglePost} options={{headerShown: true}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator