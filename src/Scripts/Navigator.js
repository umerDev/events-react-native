import * as React from 'react';
import EventForm from '../Scenes/EventForm';
import EventList from '../Scripts/EventList';
import Home from '../Scenes/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Events" component={EventList} />
        <Stack.Screen name="Add Event" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator