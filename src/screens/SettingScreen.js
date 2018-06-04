import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

export default class SettingScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});
