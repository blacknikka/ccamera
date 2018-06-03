import React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableIcon from '../components/TouchableIcon';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableIcon>
				</TouchableIcon>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});


