import {RelativeUnitsReturnType} from '../types/styleUtilityTypes';
import {Dimensions} from 'react-native';

export const getRelativeUnits = (
	baseSize: number = 360,
): RelativeUnitsReturnType => {
	const dimensions = Dimensions.get('window');

	return {
		vw: dimensions.width / 100,
		vh: dimensions.height / 100,
		bp: dimensions.width / baseSize,
		sc: dimensions.scale,
	};
};

export const bp = (size: number): number => {
	return size * getRelativeUnits().bp;
};
