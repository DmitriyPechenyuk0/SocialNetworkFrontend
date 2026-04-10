import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { Button } from "@shared/ui/button";
import { useRouter } from "expo-router";
import { COLORS } from "@shared/constants";

export default function LoginScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.tabsRow}>
                    <TouchableOpacity onPress={() => router.replace("../(auth)/registration")} style={styles.tabItem}>
                        <Text style={styles.tabText}>Реєстрація</Text>
                    </TouchableOpacity>

                    <View style={styles.tabItem}>
                        <Text style={styles.tabTextActive}>Авторизація</Text>
                        <View style={styles.tabIndicator} />
                    </View>
                </View>

                <Text style={styles.title}>З поверненням у World IT</Text>

                <Button 
                    variant="fill"
                    text="Увійти" 
                    style={styles.submitButton}
                    onPress={() => console.log("Увійти...")}
                />
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
        width: '100%',
        height: '100%',
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 25,
        width: '100%',
        minHeight: 520,
    },
    tabsRow: {
        justifyContent: "center",
        flexDirection: 'row',
        marginBottom: 30,
        gap: 30,
        alignItems: "center",
        width: '100%',
    },
    tabItem: {
        alignItems: "center",
        // marginRight: 30,
        paddingBottom: 8,
        position: 'relative',
    },
    tabText: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.blue50,
        textAlign: "center",
    },
    tabTextActive: {
        fontSize: 24,
        fontWeight: '800',
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
        textAlign: "center",
    },
    submitButton: {
        marginTop: "auto",
        width: "100%",
        height: 52,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
    },
});