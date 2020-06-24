import React, { Component } from 'react';
import { FlatList,Text,StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';
import { getEventsAxios } from '../Scripts/api';

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
        console.log(`mounting data`);
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                })),
            });
        }, 1000); 
        
       
        getEventsAxios().then(events => this.setState({ events }));
    }

    componentDidUpdate(){
        getEventsAxios().then(events => this.setState({ events }));
    }

    componentWillUnmount(){
        clearInterval(this.events);
    }

    handleAddEvent = () =>
    {
        this.props.navigation.navigate('Add Event');
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