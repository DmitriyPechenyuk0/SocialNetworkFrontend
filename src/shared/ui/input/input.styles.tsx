import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 6,
    },
    label: {
        fontSize: 14,
        color: "#1A1A1A",
        fontFamily: "GTWalsheim-Medium",
    },
    labelDisabled: {
        color: "#9E9E9E",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
        backgroundColor: "#FFFFFF",
    },
    inputWrapperFocused: {
        borderColor: "#6C63FF",
    },
    inputWrapperError: {
        borderColor: "#E53935",
    },
    inputWrapperDisabled: {
        backgroundColor: "#F5F5F5",
        borderColor: "#E0E0E0",
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#1A1A1A",
        fontFamily: "GTWalsheim-Regular",
        padding: 0,
    },
    errorText: {
        fontSize: 12,
        color: "#E53935",
        fontFamily: "GTWalsheim-Regular",
        marginTop: 2,
    },
    prefixIcon: {
        marginRight: 8,
    },
    suffixIcon: {
        marginLeft: 8,
        padding: 4,
    },
    linkRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    linkInputWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
        backgroundColor: "#FFFFFF",
    },
    linkText: {
        flex: 1,
        fontSize: 16,
        color: "#1A1A1A",
        fontFamily: "GTWalsheim-Regular",
    },
    linkIconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1.5,
        borderColor: "#E0E0E0",
        alignItems: "center",
        justifyContent: "center",
    },
});