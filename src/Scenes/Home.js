import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet,Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
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
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )};
}

export default Home;
