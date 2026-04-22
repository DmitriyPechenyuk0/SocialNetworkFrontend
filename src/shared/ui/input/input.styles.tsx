import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants";
import { FONT_SIZE } from "@shared/constants";

export const styles = StyleSheet.create({
    container: {
        gap: 6,
    },
    label: {
        fontSize: FONT_SIZE.smallTitle,
        color: COLORS.blue,
        fontFamily: "GTWalsheim-Medium",
    },
    labelDisabled: {
        color: COLORS.blue,
        opacity: 0.5,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.blue20,
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 48,
        backgroundColor: COLORS.white,
    },
    inputWrapperError: {
        borderColor: COLORS.red,
    },
    inputWrapperDisabled: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.blue20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: COLORS.blue,
        fontFamily: "GTWalsheim-Regular",
        padding: 0,
    },
    errorText: {
        fontSize: 12,
        color: COLORS.red,
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
        borderColor: COLORS.blue20,
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
        backgroundColor: COLORS.white,
    },
    linkText: {
        flex: 1,
        fontSize: 16,
        color: COLORS.blue,
        fontFamily: "GTWalsheim-Regular",
    },
    linkIconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1.5,
        borderColor: COLORS.blue20,
        alignItems: "center",
        justifyContent: "center",
    },
});