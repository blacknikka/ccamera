import React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableIcon from '../components/TouchableIcon';
import CCamera from '../components/camera';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    settings: {
        position: 'absolute',
        right: 20,
        top: 30,
    },
    recording: {
        position: 'absolute',
        left: 20,
        bottom: 30,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        width: 80,
        height: 80,
    },
    flip: {
        position: 'absolute',
        bottom: 30,
        right: 20,
    },
    picture: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
});

const HomeScreen = (props) => {
    // camera flip ref
    const cameraFlip = React.createRef();

    // change sound icon
    const changeSoundEnable = React.createRef();

    // change sound enable/disable
    const changeSoundState = (state) => {
        changeSoundEnable.current.changeIcon(state ? 'microphone' : 'microphone-slash');
    };

    const result = (
        <View style={styles.container}>
            <CCamera ref={cameraFlip} />
            <TouchableIcon
                style={styles.picture}
                icon="image"
                kind="Icon"
                fontSize={40}
            />

            <TouchableIcon
                style={styles.settings}
                icon="cogs"
                kind="Icon"
                fontSize={50}
                onPress={() => {
                    props.navigation.navigate('Setting');
                }}
            />

            <TouchableIcon
                style={styles.flip}
                icon="md-reverse-camera"
                kind="Ionicons"
                fontSize={50}
                onPress={() => {
                    // exchange inside and outside cameras
                    // ref is fired
                    cameraFlip.current.FlipCamera();
                }}
            />

            <TouchableIcon
                style={styles.cameraIcon}
                icon="camera"
                kind="Icon"
                fontSize={60}
            />

            <TouchableIcon
                style={styles.recording}
                icon="microphone"
                kind="Icon"
                fontSize={50}
                onPress={() => {
                    props.navigation.navigate('Recording', { changeSoundState });
                }}
                ref={changeSoundEnable}
            />
        </View>
    );

    return result;
};

export default HomeScreen;

