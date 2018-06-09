import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch,
} from 'react-native';
import SettingItem from '../components/SettingItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    soundEnableContainer: {
        alignItems: 'stretch',
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    soundEnableText: {
        fontSize: 18,
        flexWrap: 'wrap',
        alignSelf: 'center',
        paddingLeft: 20,
    },
    soundEnableSwitch: {
        alignSelf: 'center',
        paddingRight: 60,
    },
});

export default class RecordingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switching: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log(value);
        this.setState({
            switching: value,
        });

        this.props.navigation.state.changeSoundState(this.state.switching);
    }

    render() {
        return (
            <View style={styles.container} >
                <SettingItem>
                    <Text style={styles.soundEnableText} >
                        Sound Enable
                    </Text>

                    <Switch
                        onValueChange={this.handleChange}
                        value={this.state.switching}
                        style={styles.soundEnableSwitch}
                    />
                </SettingItem>
            </View >
        );
    }
}
