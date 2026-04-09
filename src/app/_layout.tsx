import { useRouter, usePathname, Slot } from "expo-router";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }}>

				<Stack.Screen name="(auth)" /> 
				
				{/* <Stack.Screen name="(tabs)" /> */}
			</Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="(auth)" />
			{/* <Stack.Screen name="(tabs)" /> */}
		</SafeAreaProvider>
	);
}
