import React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';

export default class TouchableIcon extends React.Component {
	async componentWillMount() {
		await Font.loadAsync({
			FontAwesome: fontAwsome,
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View>
			</View>
		);
	}
}

