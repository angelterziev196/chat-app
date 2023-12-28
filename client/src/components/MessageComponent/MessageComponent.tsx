import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {MessageComponentTypes} from './types';

const MessageComponent = ({item, user}: MessageComponentTypes): JSX.Element => {
	const status = item.user !== user;

	return (
		<View>
			<View
				style={
					status
						? styles.mmessageWrapper
						: [styles.mmessageWrapper, {alignItems: 'flex-end'}]
				}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View
						style={
							status
								? styles.mmessage
								: [styles.mmessage, {backgroundColor: 'rgb(194, 243, 194)'}]
						}>
						<Text>{item.text}</Text>
					</View>
				</View>
				<View style={{display: 'flex', flexDirection: 'row'}}>
					<Text>{user}</Text>
					<Text style={{marginLeft: 10}}>{item.time}</Text>
				</View>
			</View>
		</View>
	);
};

export default MessageComponent;
