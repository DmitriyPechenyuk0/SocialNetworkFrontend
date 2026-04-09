import { Redirect, Href } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	return (
		<>
			<StatusBar></StatusBar>

			<Redirect href={"/(tabs)"}></Redirect>
			<Redirect href={"/(auth)" as Href} />;
		</>
	);
}
