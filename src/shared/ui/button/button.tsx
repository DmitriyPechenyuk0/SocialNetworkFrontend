import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.types";
import { styles } from "./button.styles";

export function Button(props: ButtonProps) {
	const {
		text,
		variant,
		iconLeft,
		iconRight,
		buttonStyle,
		textStyle,
		disabled,
		style,
		...restProps
	} = props;

	return (
		<TouchableOpacity
			style={[
				styles.button,
				styles[variant],
				style,
				disabled && styles.disabled,
			]}
			{...restProps}
		>
			{iconLeft}
			{text && <Text style={[styles.text, textStyle]}>{text}</Text>}
			{iconRight}
		</TouchableOpacity>
	);
}
