import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
	render() {
		return (
			<View style={styles.AppBar}>
				<Text style={styles.appbarTitle}>
					Cat Camera
				</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	AppBar: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 78,
		paddingTop: 30,
		backgroundColor: '#60D2F4',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		zIndex: 10,
	},
	appbarTitle: {
		color: '#fff',
		fontSize: 18,
	},
});

export default Appbar;