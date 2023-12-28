import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import {FlatListItem} from '../../types/types';
import useChatComponent from './useChatComponent';

const ChatComponent = ({item, handleDelete}: FlatListItem): JSX.Element => {
	const {handleNavigation} = useChatComponent(item);

	const [messages, setMessages] = useState<{
		text?: string;
		time?: string;
	}>({});

	useLayoutEffect(() => {
		if (!item.messages) return;
		setMessages(item.messages[item.messages.length - 1]);
	}, []);

	return (
		<Pressable style={styles.cchat} onPress={handleNavigation}>
			<View style={styles.crightContainer}>
				<View>
					<Text style={styles.cusername}>{item.name}</Text>

					<Text style={styles.cmessage}>
						{messages?.text ? messages.text : 'Tap to start chatting'}
					</Text>
				</View>
				<View style={styles.timeAndDelete}>
					<Text style={styles.ctime}>
						{messages?.time ? messages.time : 'now'}
					</Text>
					<TouchableOpacity
						style={styles.deleteRoom}
						onPress={(): void => handleDelete(item)}>
						<Text style={styles.deleteText}>X</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Pressable>
	);
};

export default ChatComponent;
