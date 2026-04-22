import { useRouter, usePathname, Slot } from "expo-router";
import { store } from "@shared/api/store"
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function Layout() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<SafeAreaProvider>
			<View
				style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
			>
				<Provider store={store}>
					<Slot></Slot>
				</Provider>
			</View>
		</SafeAreaProvider>
	);
}
