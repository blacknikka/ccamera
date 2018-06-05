import React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableIcon from '../components/TouchableIcon';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableIcon
					style={styles.recording}
					icon='microphone'
					kind='Icon'
					fontSize={50}
					onPress={() => {
						this.props.navigation.navigate('Recording');
					}}
				/>

				<TouchableIcon
					style={styles.settings}
					icon='cogs'
					kind='Icon'
					fontSize={50}
					onPress={() => {
						this.props.navigation.navigate('Setting');
					}}
				/>

				<TouchableIcon
					style={styles.flip}
					icon='md-reverse-camera'
					kind='Ionicons'
					fontSize={50}
					onPress={() => {
						// exchange inside and outside cameras
					}}
				/>

				<TouchableIcon
					style={styles.camera}
					icon='camera'
					kind='Icon'
					fontSize={60}
				/>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
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
	camera: {
		position: 'absolute',
		bottom: 30,
	},
	flip: {
		position: 'absolute',
		bottom: 30,
		right: 20,
	},
});
