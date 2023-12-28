import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Alert} from 'react-native';
import {LoginTypes, NavType} from './types';

export const useLogin = ({navigation}: NavType): LoginTypes => {
	const [username, setUsername] = useState<string>('');

	const storeUsername = async (): Promise<void> => {
		try {
			await AsyncStorage.setItem('username', username);
			navigation.navigate('Chat');
		} catch (e) {
			Alert.alert('Error! While saving username');
		}
	};

	const handleSignIn = (): void => {
		if (username.trim()) {
			storeUsername();
		} else {
			Alert.alert('Username is required.');
		}
	};

	const getUsername = async (): Promise<void> => {
		try {
			const value = await AsyncStorage.getItem('username');

			if (value !== null) {
				navigation.navigate('Chat');
			}
		} catch (e) {
			console.error('Error while loading username!');
		}
	};

	return {handleSignIn, setUsername, getUsername};
};
