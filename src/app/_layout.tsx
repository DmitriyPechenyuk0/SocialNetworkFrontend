import { useRouter, usePathname, Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<SafeAreaProvider>
      <View style={{backgroundColor: '#ff00ff', flex: 1}} >
			  <Slot></Slot>
      </View>
		</SafeAreaProvider>
	);
}
