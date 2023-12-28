import {StyleSheet} from 'react-native';
import {bp} from '../../utils/styleUtility';
import {colors} from '../../styles/variables';

export const styles = StyleSheet.create({
	messagingscreen: {
		flex: 1,
	},
	messaginginputContainer: {
		width: '100%',
		minHeight: bp(100),
		backgroundColor: colors.white,
		paddingVertical: bp(30),
		paddingHorizontal: bp(15),
		justifyContent: 'center',
		flexDirection: 'row',
	},
	messaginginput: {
		borderWidth: 1,
		padding: bp(15),
		flex: 1,
		marginRight: bp(10),
		borderRadius: bp(20),
	},
	messagingbuttonContainer: {
		width: '30%',
		backgroundColor: colors.green,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
	},
	messagingSendButton: {
		color: colors.bonjour,
		fontSize: bp(20),
	},
});
