import {useState} from 'react';
import axios from 'axios';
import socket from '../../utils/socket';
import {ChatTypes, RoomsTypes} from './types';
import {ItemTypes} from '../../types/types';

export const useChat = (): ChatTypes => {
	const [rooms, setRooms] = useState<RoomsTypes[]>([]);
	const [visible, setVisible] = useState(false);

	const getRooms = async (): Promise<void> => {
		try {
			const response = await axios.get(
				'https://72b5-78-130-214-35.ngrok-free.app/rooms',
			);

			setRooms(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = ({id}: Pick<ItemTypes, 'id'>): void => {
		socket.emit('deleteRoom', id);
		getRooms();
	};

	const handleCreateGroup = (): void => {
		setVisible(true);
	};

	return {
		rooms,
		getRooms,
		handleDelete,
		setRooms,
		visible,
		setVisible,
		handleCreateGroup,
	};
};
