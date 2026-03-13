import { StyleSheet } from "react-native";
import { FONT_SIZE, COLORS } from "../constants";

export const styles = StyleSheet.create({
    button:{
        width: 100,
        height: 40,
        backgroundColor: COLORS.plump,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
    },

    text: {
        color: COLORS.white,
        fontSize: FONT_SIZE.titleMedium,
    },

    disabled:{
        borderColor: COLORS.plump,
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },

    disabledText:{
        color: COLORS.plump,
    },

    outline: {
        backgroundColor: "transparent",
        borderColor: COLORS.plump,
        borderWidth: 2,
    },

    textOutline: {
        color: COLORS.plump,
    },

})