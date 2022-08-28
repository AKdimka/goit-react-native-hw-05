import { View, Text, StyleSheet } from 'react-native';

import Header from "../../Components/header";

export default function CommentsScreen() {

	return (
		<View style={styles.container}>
			<Header title='Коментарі' />
			<View style={styles.main}>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
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
	}
})