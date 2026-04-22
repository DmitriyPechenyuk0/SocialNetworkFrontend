import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { InputProps } from "./button.types";
import { styles } from "./input.styles";
import { ICONS } from "../icons";

export function Input({
    label,
    fieldType = "default",
    isValidate = false,
    errorMessage,
    disabled = false,
    containerStyle,
    links = [],
    onLinksChange,
    placeholder,
    value,
    onChangeText,
    ...rest
}: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [linkDraft, setLinkDraft] = useState("");
    const [showLinkInput, setShowLinkInput] = useState(false);

    const hasError = isValidate && !!errorMessage;

    const wrapperStyle = [
        styles.inputWrapper,
        hasError && styles.inputWrapperError,
        disabled && styles.inputWrapperDisabled,
    ];

    if (fieldType === "link") {
        const handleAddPress = () => {
            if (!showLinkInput) {
                setShowLinkInput(true);
                return;
            }
            if (linkDraft.trim()) {
                onLinksChange?.([...links, linkDraft.trim()]);
                setLinkDraft("");
                setShowLinkInput(false);
            }
        };

        const handleRemoveLink = (index: number) => {
            onLinksChange?.(links.filter((_, i) => i !== index));
        };

        return (
            <View style={[styles.container, containerStyle]}>
                {label && <Text style={styles.label}>{label}</Text>}

                {links.map((link, index) => (
                    <View key={index} style={styles.linkRow}>
                        <View style={styles.linkInputWrapper}>
                            <Text style={styles.linkText} numberOfLines={1}>
                                {link}
                            </Text>
                        </View>

                        {index === links.length - 1 && (
                            <>
                                <TouchableOpacity
                                    style={styles.linkIconButton}
                                    onPress={handleAddPress}
                                >
                                    <ICONS.Add />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.linkIconButton}
                                    onPress={() => handleRemoveLink(index)}
                                >
                                    <ICONS.Close />
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                ))}

                {showLinkInput && (
                    <View style={styles.linkRow}>
                        <TextInput
                            style={[styles.linkInputWrapper, styles.input]}
                            value={linkDraft}
                            onChangeText={setLinkDraft}
                            placeholder="https://"
                            placeholderTextColor="#9E9E9E"
                            autoFocus
                        />
                        <TouchableOpacity
                            style={styles.linkIconButton}
                            onPress={handleAddPress}
                        >
                            <ICONS.Add />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.linkIconButton}
                            onPress={() => {
                                setShowLinkInput(false);
                                setLinkDraft("");
                            }}
                        >
                            <ICONS.Close />
                        </TouchableOpacity>
                    </View>
                )}

                {links.length === 0 && !showLinkInput && (
                    <View style={styles.linkRow}>
                        <View style={styles.linkInputWrapper}>
                            <Text style={{ color: "#9E9E9E" }}>https://</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.linkIconButton}
                            onPress={handleAddPress}
                        >
                            <ICONS.Add />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    }

    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <Text style={[styles.label, disabled && styles.labelDisabled]}>
                    {label}
                </Text>
            )}

            <View style={wrapperStyle}>
                {fieldType === "search" && (
                    <View style={styles.prefixIcon}>
                        <ICONS.Search />
                    </View>
                )}

                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={disabled ? "#E0E0E0" : "#9E9E9E"}
                    secureTextEntry={fieldType === "password" && !isPasswordVisible}
                    editable={!disabled}
                    {...rest}
                />

                {fieldType === "password" && (
                    <TouchableOpacity
                        style={styles.suffixIcon}
                        onPress={() => setIsPasswordVisible((v) => !v)}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                        {isPasswordVisible ? <ICONS.Eye /> : <ICONS.EyeOff />}
                    </TouchableOpacity>
                )}
            </View>

            {hasError && errorMessage && (
                <Text style={styles.errorText}>{errorMessage}</Text>
            )}
        </View>
    );
}