import { StyleSheet, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function Header({ title, out }) {

	return (
		<View style={styles.header}>
			<Feather name="arrow-left" size={20} color={out ? "#FFF" : "rgba(33, 33, 33, 0.8"} />
			<Text style={styles.headerText}>{title}</Text>
			<Feather name="log-out" size={20} color={out ? "#BDBDBD" : "#FFF"} />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.3)',
		paddingTop: 27,
		paddingBottom: 12,
		backgroundColor: '#fff',
		paddingHorizontal: 16,
	},
	headerText: {
		fontWeight: '700',
		fontSize: 20,
		color: '#212121;',
		letterSpacing: 1,
	}
})