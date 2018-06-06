import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

const SettingScreen = () => {
    const result = (
        <View style={styles.container}>
            <Text>settings</Text>
        </View >
    );

    return result;
};

export default SettingScreen;
