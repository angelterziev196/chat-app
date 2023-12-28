import {RoomsTypes} from '../screens/Chat/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
export interface ItemTypes {
	id: string;
	name: string;
	messages: {
		id: string;
		text: string;
		time: string;
		user: string;
	}[];
}

export type RootStackParamList = {
	Login: undefined;
	Chat: undefined;
	Messaging: {
		name: string;
		id: string;
	};
};

export type MessagingProps = NativeStackScreenProps<
	RootStackParamList,
	'Messaging'
>;

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type Test = RouteProp<RootStackParamList, 'Messaging'>;

export interface FlatListItem {
	item: RoomsTypes;
	handleDelete: ({id}: Pick<ItemTypes, 'id'>) => void;
}
