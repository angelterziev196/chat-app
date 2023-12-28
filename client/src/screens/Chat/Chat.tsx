import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text, Pressable, SafeAreaView, FlatList} from 'react-native';
import Modal from '../../components/Modal/Modal';
import ChatComponent from '../../components/ChatComponent/ChatComponent';
import socket from '../../utils/socket';
import {styles} from './styles';
import {useChat} from './useChat';
import {RoomsTypes} from './types';

const Chat = (): JSX.Element => {
	const {
		rooms,
		getRooms,
		handleDelete,
		setRooms,
		visible,
		setVisible,
		handleCreateGroup,
	} = useChat();

	useLayoutEffect(() => {
		getRooms();
	}, []);

	useEffect(() => {
		socket.on('roomsList', (rooms: RoomsTypes[]): void => {
			try {
				setRooms(rooms);
			} catch (error) {
				console.log(error);
			}
		});
	}, [socket]);

	return (
		<SafeAreaView style={styles.chatscreen}>
			<View style={styles.chattopContainer}>
				<View style={styles.chatheader}>
					<Text style={styles.chatheading}>Chats</Text>
					<Pressable onPress={handleCreateGroup}>
						<Text>Add Room</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.chatlistContainer}>
				{!rooms ? (
					<View style={styles.chatemptyContainer}>
						<Text style={styles.chatemptyText}>No rooms created!</Text>
						<Text>Click the icon above to create a Chat room</Text>
					</View>
				) : (
					<FlatList
						data={rooms}
						renderItem={({item}): JSX.Element => (
							<ChatComponent handleDelete={handleDelete} item={item} />
						)}
						keyExtractor={(item: RoomsTypes): string => {
							return item.id.toString();
						}}
					/>
				)}
			</View>
			{visible ? <Modal setVisible={setVisible} /> : ''}
		</SafeAreaView>
	);
};

export default Chat;
