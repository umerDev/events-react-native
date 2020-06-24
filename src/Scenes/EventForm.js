import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDate,saveEvents } from '../Scripts/api';

const styles = StyleSheet.create({
    fieldContainer:{
        marginTop:20,
        marginBottom:20,
        backgroundColor:'#fff'
    },
    text:{
        height:40,
        margin:0,
        marginRight:7,
        paddingLeft:10,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

class EventForm extends Component {

    state = {
        title: null,
        date: '',
    };

    handleChangeTitle = (value) => {
        this.setState({ title:value });
    }

    handleAddPress = () => {
        saveEvents(this.state)
        .then(() => this.props.navigation.navigate('Events'));
        
    }

    handleDatePress = () => {
        this.setState({showDatePicker:true});
    }

    handleDatePicked = (date) => {
        this.setState({
            date,
        });
        this.handleDatePickerHide();
    }

    handleDatePickerHide = () =>{
        this.setState({
            showDatePicker : false
        });
    }


    render() 
    {
        return (
            <View style = {{flex:1}}>
                <View style = {styles.fieldContainer}>
                    <TextInput 
                        key = "title"
                        style = {styles.text} 
                        placeholder="Event Title"
                        spellCheck= {false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}    
                    />
                    <TextInput 
                        style={[styles.text, styles.borderTop]}
                        placeholder = 'Event Date'
                        spellCheck = {false}
                        value = {formatDate(this.state.date.toString())}
                        editable = {!this.state.showDatePicker}
                        onFocus = {this.handleDatePress}
                    >
                    </TextInput>
                    <DateTimePicker
                        isVisible = {this.state.showDatePicker}
                        mode = 'datetime'
                        onConfirm = {this.handleDatePicked}
                        onCancel = {this.handleDatePickerHide}
                    >
                    </DateTimePicker>
                </View>
                <View> 
                    <TouchableHighlight
                        onPress = {this.handleAddPress}
                        style={styles.button}
                    >
                    <Text style = {styles.buttonText}>Add</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default EventForm;