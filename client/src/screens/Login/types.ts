import {LoginProps} from '../../types/types';

export interface LoginTypes {
	handleSignIn: () => void;
	setUsername: (value: string) => void;
	getUsername: () => void;
}

export interface LoginNavTypes {
	route: LoginProps['route'];
	navigation: LoginProps['navigation'];
}

export type NavType = Pick<LoginNavTypes, 'navigation'>;
