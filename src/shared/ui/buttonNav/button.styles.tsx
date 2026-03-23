import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 12,
        paddingBottom: 10,
        position: 'relative',
    },
    iconContainer: {
        position: 'relative',
        marginBottom: 4,
    },
    text: {
        fontSize: 12,
        color: '#000',
    },
    unperline: {
        position: 'absolute',
        top: 0,
        height: 2,
        width: '60%',
        backgroundColor: '#543C52',
    },
    badgeContainer: {
        position: 'absolute',
        top: -4,
        right: -8,
        backgroundColor: '#FF4D4D',
        borderRadius: 10,
        minWidth: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    badgeText: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 'bold',
    }
});