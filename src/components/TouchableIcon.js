import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class TouchableIcon extends React.Component {
    iconSwitcher() {
        if (this.props.kind === 'Icon') {
            return (<Icon
                name={this.props.icon}
                size={this.props.fontSize ? this.props.fontSize : 50}
            />);
        }
        else {
            return (
                <Ionicons
                    name={this.props.icon}
                    size={this.props.fontSize ? this.props.fontSize : 50}
                />
            );
        }
    }

    render() {
        const { style, onPress, iconSize } = this.props;
        return (
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <View >
                    {this.iconSwitcher()}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 65,
        borderRadius: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

