import {ItemTypes} from '../../types/types';

export interface RoomsTypes
	extends Pick<ItemTypes, 'messages' | 'id' | 'name'> {
	_id: string;
}

export interface ChatTypes {
	rooms: RoomsTypes[];
	getRooms: () => Promise<void>;
	handleDelete: ({id}: Pick<ItemTypes, 'id'>) => void;
	handleCreateGroup: () => void;
	setRooms: (rooms: RoomsTypes[]) => void;
	visible: boolean;
	setVisible: (isVisible: boolean) => void;
}
