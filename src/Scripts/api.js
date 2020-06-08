import moment from 'moment';

export const formatDate = (dateString) => {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()){
        return dateString;
    }

    return parsed.format(' D MMM YYYY');
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