import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/types';
export interface TypesChatComponent {
	handleNavigation: () => void;
}

export type NavigationType = NavigationProp<RootStackParamList>;
