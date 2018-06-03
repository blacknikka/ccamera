import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class TouchableIcon extends React.Component {
	render() {
		return (
			<TouchableHighlight>
				<View stye={styles.container}>
					<FontAwesome name="cogs" size={25} style={{ color: 'red' }} />
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#FFFDF6',
	},
});

