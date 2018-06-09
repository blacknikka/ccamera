import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default class TouchableIcon extends React.Component {
    state = {
        // icon state( is icon pattern A or B )
        icon: this.props.icon,
    };

    iconSwitcher() {
        let result = null;

        if (this.props.kind === 'Icon') {
            result = (
                <Icon
                    name={this.state.icon}
                    size={this.props.fontSize ? this.props.fontSize : 50}
                />
            );
        } else {
            result = (
                <Ionicons
                    name={this.state.icon}
                    size={this.props.fontSize ? this.props.fontSize : 50}
                />
            );
        }

        return result;
    }

    changeIcon(iconName) {
        // toggle state( true and false )
        this.setState({
            icon: iconName,
        });
    }

    render() {
        const { style, onPress } = this.props;
        return (
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <View >
                    {this.iconSwitcher()}
                </View>
            </TouchableOpacity>
        );
    }
}

