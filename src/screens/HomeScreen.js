import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Appbar from '../components/Appbar';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Appbar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;

