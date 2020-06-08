import * as React from 'react';
import EventForm from '../Scenes/EventForm';
import Home from '../Scenes/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Events" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator