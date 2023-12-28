import {useNavigation} from '@react-navigation/native';
import {ItemTypes} from '../../types/types';
import socket from '../../utils/socket';
import {TypesChatComponent, NavigationType} from './types';

const useChatComponent = (item: ItemTypes): TypesChatComponent => {
	const navigation = useNavigation<NavigationType>();

	const handleNavigation = (): void => {
		socket.emit('joinRoom', item.name);
		navigation.navigate('Messaging', {
			id: item.id,
			name: item.name,
		});
	};

	return {handleNavigation};
};

export default useChatComponent;
