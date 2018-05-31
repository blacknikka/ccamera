import { StackNavigator } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import CCamera from './components/camera'


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
                <CCamera />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: '#ddd',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
