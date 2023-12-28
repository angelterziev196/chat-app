import {StyleSheet} from 'react-native';
import {bp} from '../../utils/styleUtility';
import {colors} from '../../styles/variables';

export const styles = StyleSheet.create({
	mmessageWrapper: {
		width: '100%',
		alignItems: 'flex-start',
		marginBottom: bp(15),
	},
	mmessage: {
		maxWidth: '50%',
		backgroundColor: colors.mandysPink,
		padding: bp(15),
		borderRadius: 10,
		marginBottom: bp(2),
	},
});
