import React, { Component } from 'react';
import { FlatList,Text,StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const events = require('../data.json').events.map(evt => ({
        ...evt,
        timer: Date.now(),
    }),
); 

const styles = StyleSheet.create({
    list: {
        flex:1,
        paddingTop:20,
        paddingBottom:45,
        backgroundColor:'#f3f3f4'
    },
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({events});
        }, 1000); 
    }

    componentWillUnmount(){
        clearInterval(this.events);
    }

    handleAddEvent = () =>
    {
        this.props.navigation.navigate('Home');
    }

    render() {
        return [
            <FlatList 
                key = "flatList"
                style = {styles.list}
                data = {this.state.events}
                keyExtractor = {item => item.id}              
                renderItem = { ({ item, seperators}) => <EventCard event = {item}/> }
            />,       
            <ActionButton 
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(230,70,60,1)"
            />
        ];
    }
}

export default EventList;