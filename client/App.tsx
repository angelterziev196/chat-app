import React from 'react';
import Login from './src/screens/Login/Login';
import Messaging from './src/screens/Messaging/Messaging';
import Chat from './src/screens/Chat/Chat';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{headerShown: false}}
				/>

				<Stack.Screen
					name="Chat"
					component={Chat}
					options={{
						title: 'Chats',
						headerShown: false,
					}}
				/>
				<Stack.Screen name="Messaging" component={Messaging} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
