import React, {useLayoutEffect} from 'react';
import {styles} from './styles';
import {Text, SafeAreaView, View, TextInput, Pressable} from 'react-native';
import {useLogin} from './useLogin';
import {LoginNavTypes} from './types';

const Login = ({navigation}: LoginNavTypes): JSX.Element => {
	const {handleSignIn, setUsername, getUsername} = useLogin({navigation});

	useLayoutEffect(() => {
		getUsername();
	}, []);

	return (
		<SafeAreaView style={styles.loginscreen}>
			<View style={styles.loginscreen}>
				<Text style={styles.loginheading}>Sign in</Text>
				<View style={styles.logininputContainer}>
					<TextInput
						autoCorrect={false}
						placeholder="Enter your username"
						style={styles.logininput}
						onChangeText={(value): void => setUsername(value)}
					/>
				</View>

				<Pressable onPress={handleSignIn} style={styles.loginbutton}>
					<View>
						<Text style={styles.loginbuttonText}>Get Started</Text>
					</View>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default Login;
