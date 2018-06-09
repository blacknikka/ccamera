import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

const SettingItem = (props) => {
    const result = (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    );
    return result;
};

export default SettingItem;
