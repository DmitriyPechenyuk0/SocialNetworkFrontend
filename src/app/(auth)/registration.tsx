import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "@shared/constants";

export default function RegistrationScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.tabsRow}>
                    <TouchableOpacity onPress={() => router.replace("../(auth)/login")} style={styles.tabItem}>
                        <Text style={styles.tabText}>Авторизація</Text>
                    </TouchableOpacity>
                    <View style={styles.tabItem}>
                        <Text style={styles.tabTextActive}>Реєстрація</Text>
                        <View style={styles.tabIndicator} />
                    </View>
                </View>

                <Text style={styles.title}>Приєднуйся до World IT</Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: COLORS.plum50,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 25,
    },
    tabsRow: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    tabItem: {
        marginRight: 30,
        paddingBottom: 8,
        position: 'relative',
    },
    tabText: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.blue50,
    },
    tabTextActive: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.blue,
    },
    tabIndicator: {
        position: 'absolute',
        bottom: 0,
        height: 3,
        width: '100%',
        backgroundColor: COLORS.plum,
        borderRadius: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: COLORS.blue,
    },
});