import {MessagingProps} from '../../types/types';

export interface MessageStateTypes {
	_id: string;
	id: string;
	text: string;
	time: string;
	createdAt: string;
	updatedAt: string;
	user: string;
}

export interface MessagingTypes {
	route: MessagingProps['route'];
	navigation: MessagingProps['navigation'];
}

export type RouteType = Pick<MessagingTypes, 'route'>;

export interface UseMessagingTypes {
	getUsername: () => Promise<void>;
	handleNewMessage: () => void;
	name: string;
	setMessage: (value: string) => void;
	id: string;
	user: string;
	message: string;
	chatMessages: MessageStateTypes[];
	setChatMessages: (value: MessageStateTypes[]) => void;
}
