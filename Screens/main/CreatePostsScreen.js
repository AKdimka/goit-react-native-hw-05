import { useState } from 'react';
import { Camera, CameraType } from "expo-camera";
import {
	KeyboardAvoidingView,
	ScrollView,
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image
} from 'react-native';

import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Header from "../../Components/header";

export default function CreateScreen() {
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [camera, setCamera] = useState();
	const [photo, setPhoto] = useState();

	const takePhoto = async () => {
		const photo = await camera.takePictureAsync();
		setPhoto(photo.uri);
		console.log("photo", photo);
	};

	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.permissionContainer}>
				<Text style={{ textAlign: 'center' }}>
					We need your permission to show the camera
				</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	function toggleCameraType() {
		setType((current) => (
			current === CameraType.back ? CameraType.front : CameraType.back
		));
	}

	return (
		<View style={styles.container}>
			<Header title='Створити публікцію' />
			<ScrollView style={styles.main}>

				<View style={{
					...styles.form/* ,
						marginBottom: isKeyboardShow ? 40 : 0 */
				}}>

					<Camera style={styles.camera} type={type} ref={setCamera}>
						{photo && (
							<View style={styles.takePhotoContainer}>
								<Image
									source={{ uri: photo }}
									style={{ height: 200, width: 200 }}
								/>
							</View>
						)}

						<TouchableOpacity
							style={styles.cameraBtn}
							activeOpacity={0.8}
							onPress={takePhoto}>
							<FontAwesome5 name="camera" size={20} color="#BDBDBD" />
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.flipButton}
							onPress={toggleCameraType}>
							<MaterialCommunityIcons name="camera-flip" size={14} color="#BDBDBD" />
						</TouchableOpacity>

					</Camera>

					<Text style={styles.downloadText}>Завантажити фото</Text>

					<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'margin' : 'height'}>
						<View style={{ marginTop: 48 }}>
							<TextInput
								style={styles.input}
								/* onFocus={() => setIsKeyboardShow(true)} */
								placeholder='Назва'
								keyboardType='default'
							/>
						</View>
						<View style={{ marginTop: 32 }}>
							<TextInput
								style={styles.input}
								/* onFocus={() => setIsKeyboardShow(true)} */
								placeholder='Місцевість'
								keyboardType='default'
							/>
						</View>
					</KeyboardAvoidingView>
				</View>

			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	permissionContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#fff'
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 30,
		paddingHorizontal: 16,
	},
	camera: {
		height: 240,
		backgroundColor: '#F6F6F6',
		borderWidth: 1,
		borderColor: '#E8E8E8',
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		overflow: 'hidden',
		paddingBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
		alignItems: 'baseline'
	},
	cameraBtn: {
		padding: 20,
		borderRadius: 30,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	flipButton: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginLeft: 10,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	downloadText: {
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		marginTop: 8,

		color: '#BDBDBD',
	},
	input: {
		height: 40,
		borderBottomWidth: 1,
		borderBottomColor: '#E8E8E8',
	},
	takePhotoContainer: {
		position: 'absolute',
		borderColor: "#fff",
		borderWidth: 1,
	},
	deleteBtn: {
		width: 14,
		height: 14,
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red'
	}
})