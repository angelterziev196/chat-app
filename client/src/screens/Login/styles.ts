import {StyleSheet} from 'react-native';
import {bp} from '../../utils/styleUtility';
import {colors} from '../../styles/variables';

export const styles = StyleSheet.create({
	loginscreen: {
		flex: 1,
		backgroundColor: colors.zircon,
		alignItems: 'center',
		justifyContent: 'center',
		padding: bp(12),
		width: '100%',
	},
	loginheading: {
		fontSize: bp(26),
		marginBottom: bp(10),
	},
	logininputContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logininput: {
		borderWidth: 1,
		width: '90%',
		padding: 8,
		borderRadius: 2,
	},
	loginbutton: {
		backgroundColor: colors.green,
		padding: bp(12),
		marginVertical: bp(10),
		width: '60%',
		borderRadius: bp(50),
		elevation: 1,
	},
	loginbuttonText: {
		textAlign: 'center',
		color: colors.white,
		fontWeight: '600',
	},
});
