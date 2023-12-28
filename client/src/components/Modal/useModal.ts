import socket from '../../utils/socket';
import {useChat} from '../../screens/Chat/useChat';
import {useState} from 'react';
import {CloseModalType, ModalTypes} from './types';

const useModal = (closeModal: CloseModalType): ModalTypes => {
	const [groupName, setGroupName] = useState('');
	const {getRooms} = useChat();

	const handleCreateRoom = (): void => {
		socket.emit('createRoom', groupName);
		getRooms();
		closeModal();
	};

	return {handleCreateRoom, setGroupName};
};

export default useModal;
