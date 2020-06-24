import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet,Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    padding:20,
    margin:30
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'top'
  }
});

class Home extends Component {

    handleAddPress = () =>
    {
        this.props.navigation.navigate('Events');
        console.log("::Loggin in");
    }
    render() 
    {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                onPress={this.handleAddPress}
                title="Login ¬!"
                color="#841584"
                accessibilityLabel="Enter your details, then login."
            />
            <Button
                onPress={this.handleAddPress}
                title="Create Account ¬!"
                color="#841584"
                accessibilityLabel="Enter your details, then login."
            />
        </View>
    )};
}

export default Home;
