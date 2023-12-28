import {StyleSheet} from 'react-native';
import {bp} from '../../utils/styleUtility';
import {colors} from '../../styles/variables';

export const styles = StyleSheet.create({
	chatscreen: {
		backgroundColor: colors.alablaster,
		flex: 1,
		padding: bp(10),
		position: 'relative',
	},
	chatheading: {
		fontSize: bp(24),
		fontWeight: 'bold',
		color: colors.green,
	},
	chattopContainer: {
		backgroundColor: colors.alablaster,
		height: bp(70),
		width: '100%',
		padding: bp(20),
		justifyContent: 'center',
		marginBottom: bp(15),
		elevation: 2,
	},
	chatheader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	chatlistContainer: {
		paddingHorizontal: bp(10),
	},
	chatemptyContainer: {
		width: '100%',
		height: '80%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	chatemptyText: {fontWeight: 'bold', fontSize: bp(24), paddingBottom: bp(30)},
});
