import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

export default class TouchableIcon extends React.Component {
	render() {
		const { style, onPress } = this.props;
		return (
			<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
				<View>
					<FontAwesome
						name={this.props.icon}
						size={this.props.fontSize ? this.props.fontSize : 55}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 24,
	},
});

