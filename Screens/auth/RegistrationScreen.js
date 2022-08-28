import { useState, useEffect } from 'react';
import {
	StyleSheet,
	ImageBackground,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	TextInput,
	View,
	TouchableOpacity,
	Platform,
	Dimensions,
} from 'react-native';


const initialState = {
	login: '',
	email: '',
	number: '',
	password: '',
};

export default function RgistrationScreen({ navigation }) {
	const [isKeyboardShow, setIsKeyboardShow] = useState(false);
	const [state, setState] = useState(initialState);
	const [dimentions, setDimentions] = useState(Dimensions.get('window').width - 20 * 2);

	useEffect(() => {
		const onChange = () => {
			const width = Dimensions.get("window").width - 20 * 2;
			setDimentions(width);
		};
		Dimensions.addEventListener("change", onChange);
		return () => {
			Dimensions.removeEventListener("change", onChange);
		};
	}, [])

	const keyBoardHide = () => {
		Keyboard.dismiss()
		setIsKeyboardShow(false)
	}

	const submitForm = () => {
		keyBoardHide()
		console.log(state);
		setState(initialState);
	}

	return (
		<TouchableWithoutFeedback onPress={keyBoardHide}>
			<View style={styles.container} >
				<ImageBackground
					style={styles.bgimg}
					source={require('../../assets/images/photo.jpg')}>

					<View style={styles.formbg}>
						<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'margin' : 'height'}>
							<View
								style={{
									...styles.form,
									marginBottom: isKeyboardShow ? 32 : 0,
									width: dimentions
								}}>

								<Text style={styles.heading}>
									Реєстрація
								</Text>

								<View style={{ marginTop: 33 }}>
									<TextInput
										value={state.login}
										onChangeText={(value) =>
											setState((prevState) => ({ ...prevState, login: value }))}
										onFocus={() => setIsKeyboardShow(true)}
										style={styles.input}
										placeholder='Логін'
										autoFocus
									/>
								</View>

								<View style={{ marginTop: 16 }}>
									<TextInput
										value={state.email}
										onChangeText={(value) =>
											setState((prevState) => ({ ...prevState, email: value }))}
										onFocus={() => setIsKeyboardShow(true)}
										style={styles.input}
										placeholder='Електронна пошта'
										keyboardType='email-address'
									/>
								</View>

								<View style={{ marginTop: 16 }}>
									<TextInput
										value={state.phone}
										onChangeText={(value) =>
											setState((prevState) => ({ ...prevState, phone: value }))}
										onFocus={() => setIsKeyboardShow(true)}
										style={styles.input}
										placeholder='Номер телефону'
										keyboardType='number-pad'
									/>
								</View>

								<View style={{ marginTop: 16 }}>
									<TextInput
										value={state.password}
										onChangeText={(value) =>
											setState((prevState) => ({ ...prevState, password: value }))}
										onFocus={() => setIsKeyboardShow(true)}
										style={styles.input}
										placeholder='Пароль'
										secureTextEntry
									/>
								</View>

								<TouchableOpacity
									style={styles.btn}
									activeOpacity={0.85}
									onPress={() => submitForm()}>
									<Text
										style={styles.btnText}>
										Зареєструватись
									</Text>
								</TouchableOpacity>

								<Text style={styles.formLink} onPress={() => navigation.navigate('Login')}>Вже є акаунт? Увійти</Text>
							</View>
						</KeyboardAvoidingView>
					</View>

				</ImageBackground>
			</View>
		</TouchableWithoutFeedback >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	bgimg: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end'
	},
	formbg: {
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		backgroundColor: '#fff',
		paddingBottom: 78,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	form: {
	},
	heading: {
		fontFamily: "Roboto-Medium",
		fontSize: 30,
		lineHeight: 35,
		textAlign: 'center',
		color: '#212121',
		marginTop: 33,
	},
	input: {
		fontFamily: "Roboto-Regular",
		height: 50,
		backgroundColor: '#F6F6F6',
		borderWidth: 1,
		borderColor: '#E8E8E8',
		color: '#212121',
		borderRadius: 8,
		padding: 16,
	},
	btn: {
		paddingHorizontal: 32,
		paddingVertical: 16,
		backgroundColor: '#ff6C00',
		marginTop: 43,
		alignItems: 'center',
		borderRadius: 100,
	},
	btnText: {
		fontFamily: "Roboto-Regular",
		fontStyle: 'normal',
		fontSize: 16,
		color: '#FFFFFF',
	},
	formLink: {
		fontFamily: "Roboto-Regular",
		textAlign: 'center',
		color: '#1B4371',
		marginTop: 16,
	}
});