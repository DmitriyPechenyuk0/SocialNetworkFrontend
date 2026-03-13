import { useRouter, usePathname, Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<SafeAreaProvider>
			<Slot></Slot>
		</SafeAreaProvider>
	);
}
