import {StyleSheet} from 'react-native';
import {bp} from '../../utils/styleUtility';
import {colors} from '../../styles/variables';

export const styles = StyleSheet.create({
	cchat: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: bp(15),
		backgroundColor: colors.white,
		height: bp(80),
		marginBottom: bp(10),
	},
	cavatar: {
		marginRight: bp(15),
	},
	cusername: {
		fontSize: bp(18),
		marginBottom: bp(5),
		fontWeight: 'bold',
	},
	cmessage: {
		fontSize: bp(14),
		opacity: 0.7,
	},
	crightContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1,
	},
	ctime: {
		opacity: 0.5,
	},
	timeAndDelete: {
		display: 'flex',
		alignItems: 'flex-end',
	},
	deleteRoom: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		marginTop: bp(10),
		fontSize: bp(18),
		width: bp(20),
		height: bp(20),
		backgroundColor: colors.carnation,
	},
	deleteText: {
		color: colors.white,
	},
});
