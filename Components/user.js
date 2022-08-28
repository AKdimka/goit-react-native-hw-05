import { StyleSheet, Text, View, Image } from 'react-native';

export default function User() {

	return (
		<View style={styles.user}>
			<Image style={styles.img} source={require('../assets/images/userPhoto.jpg')} />
			<View style={styles.userText}>
				<Text style={styles.name}>Natali Romanova</Text>
				<Text style={styles.email}>email@example.com</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	user: {
		display: 'flex',
		flexDirection: 'row',
		height: 60,
		marginBottom: 30,
	},
	img: {
		width: 60,
		height: 60,
		borderRadius: 16,
	},
	userText: {
		marginLeft: 8,
		justifyContent: 'center'
	},
	name: {
		fontFamily: 'Roboto-Medium',
		fontSize: 13,

		color: '#212121',
	},
	email: {
		fontFamily: 'Roboto-Regular',
		fontSize: 11,

		color: '#rgba(33, 33, 33, 0.8)',
	}
})