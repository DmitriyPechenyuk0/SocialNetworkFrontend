import { Stack } from "expo-router";
import { View, StyleSheet, } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
			<KeyboardProvider>
				<View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
					
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="index" />
						<Stack.Screen name="(auth)" />
						<Stack.Screen name="(tabs)" />
					</Stack>
				</View>
			</KeyboardProvider>
        </SafeAreaProvider>
    );
}

