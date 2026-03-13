import type { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: "primary" | "secondary" | "outline";
    style?: ViewStyle;
    titleStyle?: TextStyle;
    imageRight?: boolean;
    imageLeft?: boolean;
}