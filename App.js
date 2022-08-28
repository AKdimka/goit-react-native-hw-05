import { useState } from 'react';
import { } from 'react-native';

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from './router';

const loadApplication = async () => {
	await Font.loadAsync({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	})
}

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const routing = useRoute(1);

	if (!isReady) {
		return (<AppLoading
			startAsync={loadApplication}
			onFinish={() => setIsReady(true)}
			onError={console.warn} />)
	}

	return (
		<NavigationContainer>
			{routing}
		</NavigationContainer>
	);
}