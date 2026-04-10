import { View, Text, TouchableOpacity, StyleSheet, ScrollView, } from "react-native";
import { ICONS } from "@shared/ui/icons";
import { Button } from "@shared/ui/button";
import { useRouter } from "expo-router";
import { COLORS } from "@shared/constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.header}>
                <ICONS.Logo />
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }} style={{ width: '100%' }}>
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

                    <Text style={styles.title}>Раді тебе знову бачити</Text>

                    <Button 
                        variant="fill"
                        text="Увійти" 
                        textStyle={{ fontSize: 18, fontWeight: "600" }}
                        style={styles.submitButton}
                        onPress={() => console.log("Увійти...")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
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
        height: 52,
        backgroundColor: COLORS.plum,
        borderRadius: 26,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        backgroundColor: COLORS.white,
        position: "absolute",
        width: 400,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        paddingTop: 20,
        zIndex: 10,
        elevation: 10,
        top: 0,
    },
});