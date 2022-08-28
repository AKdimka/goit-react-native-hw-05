import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';

export default function ProfileScreen() {

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.bgimg}
				source={require('../../assets/images/photo.jpg')}>
				<ScrollView></ScrollView>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bgimg: {
		flex: 1,
		width: '100%'
	},
})