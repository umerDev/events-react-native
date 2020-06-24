import moment from 'moment';
import Constants from 'expo-constants';
import axios from 'axios';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const { manifest } = Constants;
//const api = manifest.packagerOpts.dev ? manifest.debuggerHost.split(':').shift().concat(':3000') : prodUrl;

const url = `http://10.0.2.2:3000/events`
const prodUrl = ``;

export const getEventsAxios = async () => {
    const response = await axios.get(url);
    return response.data.map(e => ({ ...e, date: new Date(e.date)}));
}

export const saveEvents = async ({title, date}) => {
    const response = await axios.post(url,{
        'title':title,
        'date':date,
        'id':uuidv4(),
    })
    return response;

}

export const getEvents = () => {
    return fetch(url)
        .then(response => {
            console.log(response.url);
            response.json();
        })
        .then(events => {
            events.map(e => ({ ...e, date: new Date(e.date)})
        )})
        .catch(err => console.log(err));
}

export const formatDate = (dateString) => {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()){
        return dateString;
    }

    return parsed.format('HH:MM DD/MM/YYYY');
}

export const getCountdownParts = (eventDate) => {
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));

    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes : duration.get('minutes'),
        seconds : duration.get('seconds')
    };
}