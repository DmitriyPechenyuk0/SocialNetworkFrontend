import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "@shared/ui/button";
import { useRouter } from "expo-router";
import { COLORS } from "@shared/constants";

export default function RegistrationScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.tabsRow}>
                    <View style={styles.tabItem}>
                        <Text style={styles.tabTextActive}>Реєстрація</Text>
                        <View style={styles.tabIndicator} />
                    </View>

                    <TouchableOpacity 
                        onPress={() => router.replace("../(auth)/login")} 
                        style={styles.tabItem}
                    >
                        <Text style={styles.tabText}>Авторизація</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Приєднуйся до World IT</Text>

                <Button 
                    variant="fill" 
                    text="Створити акаунт" 
                    textStyle={{ fontSize: 18, fontWeight: "600" }}
                    style={styles.submitButton}
                    onPress={() => console.log("Створюємо...")}
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
        borderRadius: 20,
        padding: 45,
        width: '100%',
        minHeight: 520,
        alignItems: "center",
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
        fontSize: 28,
        fontWeight: '900',
        color: COLORS.blue50,
        textAlign: "center",
    },
    tabTextActive: {
        fontSize: 28,
        fontWeight: '900',
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
        width: 311,
        height: 62,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
    },
});