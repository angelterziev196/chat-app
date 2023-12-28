import React, {useLayoutEffect, useEffect} from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import MessageComponent from '../../components/MessageComponent/MessageComponent';
import {styles} from './styles';
import socket from '../../utils/socket';
import useMessaging from './useMessaging';
import {MessageStateTypes, MessagingTypes} from './types';

const Messaging = ({route, navigation}: MessagingTypes): JSX.Element => {
	const {
		getUsername,
		handleNewMessage,
		name,
		setMessage,
		id,
		user,
		message,
		setChatMessages,
		chatMessages,
	} = useMessaging({route});

	useLayoutEffect(() => {
		navigation.setOptions({title: name});
		getUsername();
		socket.emit('findRoom', id);
		socket.on('foundRoom', roomChats => setChatMessages(roomChats));
	}, []);

	useEffect(() => {
		socket.on('foundRoom', roomChats => setChatMessages(roomChats));
	}, [socket]);

	return (
		<View style={styles.messagingscreen}>
			<View
				style={[
					styles.messagingscreen,
					{paddingVertical: 15, paddingHorizontal: 10},
				]}>
				{chatMessages ? (
					<FlatList
						data={chatMessages}
						renderItem={({item}): JSX.Element => (
							<MessageComponent item={item} user={user} />
						)}
						keyExtractor={(item: MessageStateTypes): string => item.id}
					/>
				) : (
					''
				)}
			</View>

			<View style={styles.messaginginputContainer}>
				<TextInput
					style={styles.messaginginput}
					onChangeText={(value): void => setMessage(value)}
					value={message}
				/>
				<Pressable
					style={styles.messagingbuttonContainer}
					onPress={handleNewMessage}>
					<View>
						<Text style={styles.messagingSendButton}>SEND</Text>
					</View>
				</Pressable>
			</View>
		</View>
	);
};

export default Messaging;
