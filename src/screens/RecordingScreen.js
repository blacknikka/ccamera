import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    soundEnableText: {
        fontSize: 18,
        margin: 10,
    },
    soundEnableSwitch: {
        margin: 10,
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
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.container}>
                    <Text style={styles.soundEnableText} >
                        Sound Enable
                    </Text>

                    <Switch
                        onValueChange={this.handleChange}
                        value={this.state.switching}
                        style={styles.soundEnableSwitch}
                    />
                </View >
            </View >
        );
    }
}
