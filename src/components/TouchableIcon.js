import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
//import fontAwsome from '../../assets/fonts/fontawesome-webfont.ttf';


export default class TouchableIcon extends React.Component {
	state = {
		fontLoaded: false,
	}

	async componentWillMount() {
		await Font.loadAsync({
			FontAwesome: fontAwsome,
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<TouchableHighlight>
				<View stye={styles.container}>
					{
						this.state.fontLoaded ? (
							<Text style={[styles.circleButtonTitle, { color: textColor }]}>
								{this.props.children}
							</Text>
						) : null
					}
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

