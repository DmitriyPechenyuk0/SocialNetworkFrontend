import { useRouter, usePathname, Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<SafeAreaProvider>
			<View
				style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
			>
				<Slot></Slot>
			</View>
		</SafeAreaProvider>
	);
}
