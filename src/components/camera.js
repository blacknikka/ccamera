import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, Permissions } from 'expo';

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
    },
    TouchableOpacityStyle: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    CameraText: {
        backgroundColor: 'blue',
        flex: 1,
        color: 'yellow',
        fontSize: 25,
    },
});

export default class CCamera extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    // change camera that inside and outside
    FlipCamera() {
        console.log('clicked f');
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
        });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return (
                <View>
                    <Text style={styles.CameraText}>
                        no camera permission
                    </Text>
                </View>
            );
        } else if (hasCameraPermission === false) {
            return (
                <View>
                    <Text style={styles.CameraText}>No access to camera</Text>
                </View>
            );
        }
        return (
            <View style={styles.cameraContainer}>
                <Camera style={{ flex: 1 }} type={this.state.type} />
            </View>
        );
    }
}

