import { COLORS, FONT_SIZE } from "@shared/constants";
import { font } from "@shared/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		minHeight: 40,
		minWidth: 40,
		borderRadius: 45,
		padding: 10,
	},
	buttonWithPaddings: {
		paddingHorizontal: 16,
	},
	fill: {
		backgroundColor: COLORS.plum,
		borderWidth: 0,
	},
	outline: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderRightColor: COLORS.plum,
	},
	text: {
		fontFamily: font.medium.fontFamily,
		fontSize: FONT_SIZE.defaultP,
	},
	textFill: {
		color: COLORS.white,
	},
	textOutline: {
		color: COLORS.plum,
	},
	disabled: {
		opacity: 0.8,
	},
});
