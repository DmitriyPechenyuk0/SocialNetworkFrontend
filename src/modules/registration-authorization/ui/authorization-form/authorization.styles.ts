import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    submitButton: {
        marginTop: "auto",
        width: 311,
        height: 52,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
    },
})