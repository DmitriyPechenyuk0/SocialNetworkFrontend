import { StyleSheet, View } from "react-native";
import { ICONS } from "../icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../button";

const style = StyleSheet.create({
	header: {
		flexDirection: "row",
		height: 60,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingHorizontal: 5,
	},
	buttons: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
});

export function Header() {
	return (
		<SafeAreaView edges={["top"]} style={style.header}>
			<ICONS.Logo />

			<View style={style.buttons}>
				<Button variant="outline" iconRight={<ICONS.Plus />} />
				<Button variant="outline" iconRight={<ICONS.Settings />} />
				<Button variant="outline" iconRight={<ICONS.Logout />} />
			</View>
		</SafeAreaView>
	);
}
