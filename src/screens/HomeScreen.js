import React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableIcon from '../components/TouchableIcon';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableIcon style={styles.recording} icon='microphone' fontSize={60}>
				</TouchableIcon>

				<TouchableIcon style={styles.settings} icon='cogs' fontSize={60}>
				</TouchableIcon>

				<TouchableIcon style={styles.camera} icon='camera' fontSize={70}>
				</TouchableIcon>
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
		bottom: 30,
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
});


