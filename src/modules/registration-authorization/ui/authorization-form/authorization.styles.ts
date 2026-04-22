import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        alignItems: "center",
    },
    input: {
        flex: 1,
        justifyContent: "space-between",
    },

    inputContainer: {
        width: 311,
        marginBottom: 20,
    },

    formWrapper: {
        width: '100%',
        alignItems: "center",
        paddingTop: 20,
    },

    submitButton: {
        marginTop: 10,
        width: 311,
        height: 52,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
    },
})