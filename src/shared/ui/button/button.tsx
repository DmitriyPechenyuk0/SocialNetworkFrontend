import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.types";
import { styles } from "./button.styles";

export function Button(props: ButtonProps) {
    const { title, variant, style, disabled, titleStyle, imageLeft, imageRight, ...rest } = props;
    const [isHovered, setIsHovered] = useState(false);
    const isOutline = variant === "outline";


    return(
		<Pressable
            onHoverIn = {() => setIsHovered(true)}
            onHoverOut = {() => setIsHovered(false)}
			style={[
                styles.button, 
                isOutline ? styles.outline : styles.button, 
                isHovered && !disabled && styles.outline,
                disabled && styles.disabled, 
                style,
            ]}
			disabled={disabled}
			{...rest}
		>
            {imageLeft && imageLeft}
			<Text
				style={[
                    styles.text,
                    isOutline && styles.textOutline,
                    disabled && styles.disabledText, 
                    titleStyle,
                ]}
			>
				{title}
			</Text>
            {imageRight && imageRight}

		</Pressable>
    )
}