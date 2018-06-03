import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

const App = createStackNavigator(
	{
		Main: { screen: HomeScreen },
	},
	{
		navigationOptions: {
			headerTitle: 'Cat Camera',
			headerTintColor: '#fff',
			headerBackTitle: null,
			headerStyle: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.2,
				shadowRadius: 2,
				backgroundColor: '#265366',
			},
			headerTitleStyle: {
				color: '#fff',
			},
		},
	});

export default App;
