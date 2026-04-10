import { Redirect, Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	const isLoggedIn = false;

	if (!isLoggedIn) {
		return <Redirect href = {"/(auth)/login"} />;
	}
	
	return (
		<>
			<StatusBar></StatusBar>

			<Redirect href={"/(tabs)"}></Redirect>
		</>
	);
}
