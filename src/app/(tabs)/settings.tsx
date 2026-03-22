import { COLORS } from "@shared/constants";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";



export default function Settings() {
    const [activeTab, setActiveTab] = useState<'info' | 'albums'>('info');

    return(
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                style={styles.tab}
                onPress={() => setActiveTab('info')}
                >
                    <Text style={[styles.tabText, activeTab === 'info' && styles.tabTextActive]}>
                        Особиста інформація
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('albums')}>
                    <Text style={[styles.tabText, activeTab === 'albums' && styles.tabTextActive]}>
                        Альбоми
                    </Text>
                    {activeTab === 'albums' && <View style={styles.indicator}/>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.fog,
    },

    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: COLORS.plum50,
        paddingTop: 10,
    },

    tab: {
        marginRight: 20,
        paddingBottom: 10,
        alignItems: 'center',
    },

    tabText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.blue50,
    },

    tabTextActive: {
        color: COLORS.blue,
    },

    indicator: {
        position: 'absolute',
        bottom: 0,
        height: 2,
        width: '100%',
        backgroundColor: COLORS.plum,
        borderRadius: 2,
    },
})