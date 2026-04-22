import { ReactNode } from "react";
import type { TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
	text?: string;
	variant: "fill" | "outline";
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	buttonStyle?: ViewStyle;
	textStyle?: TextStyle;
}
