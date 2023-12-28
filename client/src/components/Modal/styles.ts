import {StyleSheet} from 'react-native';
import {bp} from '../../utils/styleUtility';
import {colors} from '../../styles/variables';

export const styles = StyleSheet.create({
	modalbutton: {
		width: '40%',
		height: bp(45),
		backgroundColor: 'green',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		color: colors.white,
	},
	modalbuttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: bp(10),
	},
	modaltext: {
		color: colors.white,
	},
	modalContainer: {
		width: '100%',
		borderTopColor: colors.alto,
		borderTopWidth: 1,
		elevation: 1,
		height: bp(400),
		backgroundColor: colors.white,
		position: 'absolute',
		bottom: 0,
		zIndex: 10,
		paddingVertical: bp(50),
		paddingHorizontal: bp(20),
	},
	modalinput: {
		borderWidth: 2,
		padding: bp(15),
	},
	modalsubheading: {
		fontSize: bp(20),
		fontWeight: 'bold',
		marginBottom: bp(15),
		textAlign: 'center',
	},
});
