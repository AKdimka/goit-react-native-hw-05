import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';

import PostsScreen from './Screens/main/PostsScreen';
import CreateScreen from './Screens/main/CreatePostsScreen';
import ProfileScreen from './Screens/main/ProfileScreen';

import { SimpleLineIcons, Feather, Ionicons } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
	if (!isAuth) {

		return (<AuthStack.Navigator>
			<AuthStack.Screen
				options={{ headerShown: false }}
				name='Login'
				component={LoginScreen} />
			<AuthStack.Screen
				options={{ headerShown: false }}
				name='Registration'
				component={RegistrationScreen} />
		</AuthStack.Navigator>)
	}

	return (
		<MainTab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
			}}>
			<MainTab.Screen
				name='Posts'
				component={PostsScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<SimpleLineIcons
							style={focused && styles.focusNav}
							name="grid"
							size={24}
							color='rgba(33, 33, 33, 0.8)' />
					),
				}}
			/>
			<MainTab.Screen
				name='Create'
				component={CreateScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Ionicons
							style={focused && styles.focusNav}
							name="add"
							size={24}
							color='rgba(33, 33, 33, 0.8)' />
					),
				}}
			/>
			<MainTab.Screen
				name='Profiler'
				component={ProfileScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, size, color }) => (
						<Feather
							style={focused && styles.focusNav}
							name="user"
							size={24}
							color='rgba(33, 33, 33, 0.8)' />
					),
				}} />
		</MainTab.Navigator>
	)
}
const styles = StyleSheet.create({
	focusNav: {
		paddingVertical: 7,
		paddingHorizontal: 28,
		borderRadius: 20,
		backgroundColor: '#FF6C00',
		color: '#fff',
		overflow: 'hidden'
	}
})