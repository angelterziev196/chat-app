import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SetVisibleType} from './types';
import useModal from './useModal';

const Modal = ({setVisible}: SetVisibleType): JSX.Element => {
	const closeModal = (): void => setVisible(false);
	const {handleCreateRoom, setGroupName} = useModal(closeModal);

	return (
		<View style={styles.modalContainer}>
			<Text style={styles.modalsubheading}>Enter your Group name</Text>
			<TextInput
				style={styles.modalinput}
				placeholder="Group name"
				onChangeText={(value): void => setGroupName(value)}
			/>
			<View style={styles.modalbuttonContainer}>
				<Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
					<Text style={styles.modaltext}>CREATE</Text>
				</Pressable>

				<Pressable
					style={[styles.modalbutton, {backgroundColor: '#E14D2A'}]}
					onPress={closeModal}>
					<Text style={styles.modaltext}>CANCEL</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Modal;
