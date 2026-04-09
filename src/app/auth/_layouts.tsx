import React, { useState } from "react";
import { Header } from "@shared/ui/header/header";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "@shared/constants";
import { Registration } from "../../modules/registration-authorization/ui/registration-form";
import { Authorization } from "../../modules/registration-authorization/ui/authorization-form";

export default function AuthScreen() {
    const [mode, setMode] = useState<'reg' | 'auth'>('reg');

    return (
        <View style={styles.container}>
            <Header hideSettings={true} hidePlus={true} />

            <View style={styles.card}>
                <View style={styles.tabsRow}>
                    <TouchableOpacity 
                        onPress={() => setMode('reg')} 
                        style={styles.tabItem}
                    >
                        <Text style={mode === 'reg' ? styles.tabTextActive : styles.tabText}>
                            Реєстрація
                        </Text>
                        {mode === 'reg' && <View style={styles.tabIndicator} />}
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => setMode('auth')} 
                        style={styles.tabItem}
                    >
                        <Text style={mode === 'auth' ? styles.tabTextActive : styles.tabText}>
                            Авторизація
                        </Text>
                        {mode === 'auth' && <View style={styles.tabIndicator} />}
                    </TouchableOpacity>
                </View>
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
        borderRadius: 30,
        padding: 25,
        minHeight: 450,
        elevation: 5,
        shadowColor: COLORS.blue,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
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
})