import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from "../../Components/header";
import User from "../../Components/user";
import Publication from "../../Components/publication";

import posts from '../../assets/posts.json'
import photo1 from '../../assets/images/publication-1.jpg'
import photo2 from '../../assets/images/publication-2.jpg'

export default function PostsScreen() {

	return (
		<View style={styles.container}>
			<Header title='Публікції' out={true} />
			<ScrollView style={styles.main}>

				<User />
				<Publication title={'Ліс'}
					image={photo1}
					coments={0}
					location={'Ivano-Frankivsk Region, Ukraine'} />

				<Publication title={'Чорне море'}
					image={photo2}
					coments={0}
					location={'Odessa, Ukraine'} />

				{/* {posts.map(({ id, image, title, comments, location }) =>
					<Publication key={id} title={title}
						image={image}
						coments={comments}
						location={location} />)} */}
			</ScrollView>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start'
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 30,
		paddingHorizontal: 16,
	},
})