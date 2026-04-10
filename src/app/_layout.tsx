import { Slot, Stack, usePathname, useRouter } from "expo-router";
import { View, StyleSheet, } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
