import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CCamera extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return (
                <View>
                    <Text style={styles.CameraText}>
                        no camera parmission
                    </Text>
                </View>
            );
        } else if (hasCameraPermission === false) {
            return (
                <View>
                    <Text style={styles.CameraText}>No access to camera</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.cameraContainer}>
                    <Camera style={{ flex: 1 }} type={this.state.type}>
                        <View style={styles.cameraStyle}>
                            <TouchableOpacity
                                style={styles.TouchableOpacityStyle}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Text
                                    style={{ fontSize: 18, marginLeft: 3, marginBottom: 20, color: 'red' }}>
                                    {' '}Flip{' '}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
    },
    cameraStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    TouchableOpacityStyle: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    CameraText: {
        backgroundColor: "blue",
        flex: 1,
        color: "yellow",
        fontSize: 25,
    },
});
