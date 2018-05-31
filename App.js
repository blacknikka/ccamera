import { StackNavigator } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import CCamera from './src/components/camera'

import HomeScreen from './src/screens/HomeScreen'

export default class App extends React.Component {
    state = {
        counter: 0
    }

    ChangeText = () => {
        this.setState(x => {
            return { counter: x.counter + 1 }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <HomeScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
