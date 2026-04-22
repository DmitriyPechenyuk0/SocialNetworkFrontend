import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        alignItems: "center",
    },
    formWrapper: {
        width: '100%',
        alignItems: "center",
        paddingTop: 20,
    },
    inputContainer: {
        width: 311,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        justifyContent: "space-between",
    },
    submitButton: {
        marginTop: 20,
        width: 311,
        height: 52,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 32,
        padding: 24,
        alignItems: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 5,
        marginBottom: 30,
    },
    otpInputBox: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpPair: {
        flexDirection: 'row',
        gap: 8,
    },
    textInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 15,
    },
    modalTitle: {
        marginTop: 25,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 25,
    },
    modalSubTitle: {
        fontSize: 14,
        color: COLORS.blue,
        textAlign: 'center',
        lineHeight: 20,
    },
    modalButton: {
        marginTop: 10,
        width: '100%',
        height: 52,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        marginBottom: 12,
    },
    customBackButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customBackText: {
        fontSize: 16,
        color: COLORS.plum,
        fontWeight: '500',
        marginBottom: 10,
    },
    underscore: {
        position: 'absolute',
        bottom: 12,
        width: 16,
        height: 1.5,
        backgroundColor: COLORS.blue50,
    },
    inputLabel: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 30,
    },
});

