import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import socket from '../../utils/socket';
import {UseMessagingTypes, MessageStateTypes, RouteType} from './types';

const useMessaging = ({route}: RouteType): UseMessagingTypes => {
	const [user, setUser] = useState<string>('');

	const {name, id} = route.params;
	const [message, setMessage] = useState<string>('');
	const [chatMessages, setChatMessages] = useState<MessageStateTypes[]>([]);

	const getUsername = async (): Promise<void> => {
		try {
			const value = await AsyncStorage.getItem('username');
			if (value !== null) {
				setUser(value);
			}
		} catch (e) {
			console.error('Error while loading username!');
		}
	};

	socket.on('roomMessage', msg => {
		setChatMessages([...chatMessages, msg]);
	});

	const handleNewMessage = (): void => {
		if (!message) return;

		const hour =
			new Date().getHours() < 10
				? `0${new Date().getHours()}`
				: `${new Date().getHours()}`;

		const mins =
			new Date().getMinutes() < 10
				? `0${new Date().getMinutes()}`
				: `${new Date().getMinutes()}`;

		const newMessage = {
			message,
			room_id: id,
			user,
			timestamp: {hour, mins},
		};

		if (user) {
			socket.emit('newMessage', newMessage);
			socket.emit('roomMessage', newMessage);
		}

		setMessage('');
	};

	return {
		getUsername,
		handleNewMessage,
		name,
		setMessage,
		id,
		user,
		message,
		setChatMessages,
		chatMessages,
	};
};

export default useMessaging;
