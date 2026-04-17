import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    TextInput
} from 'react-native';
import { COLORS } from "@shared/constants";
import { pickImage } from "@shared/utils/pickImage";
import { ICONS } from "@shared/ui/icons";

export default function Settings() {
    const [activeTab, setActiveTab] = useState<'info' | 'albums'>('info');
    const [avatar, setAvatar] = useState<string | null>(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [username, setUsername] = useState('@thelili');

    const handlePickImage = async () => {
        const res = await pickImage(false, {
            mediaTypes: "images",
            quality: 0.8,
        });

        if (res.status === "success") {
            setAvatar(res.assets[0].uri);
        } else {
            console.log(res.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('info')}
                >
                    <Text style={[styles.tabText, activeTab === 'info' && styles.tabTextActive]}>
                        Особиста інформація
                    </Text>
                    {activeTab === 'info' && <View style={styles.indicator} />}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('albums')}
                >
                    <Text style={[styles.tabText, activeTab === 'albums' && styles.tabTextActive]}>
                        Альбоми
                    </Text>
                    {activeTab === 'albums' && <View style={styles.indicator} />}
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={[{ padding: 16 }, { backgroundColor: COLORS.plum50}]}>
                {activeTab === 'info' && (
                    <>
                        {!isEditModalVisible ? (
                            <View style={styles.card}>
                                <TouchableOpacity 
                                    style={styles.editBtn} 
                                    onPress={() => setIsEditModalVisible(true)}
                                >
                                    <Text><ICONS.Pencil /></Text>
                                </TouchableOpacity>

                                <View>
                                    {avatar ? (
                                        <Image source={{ uri: avatar }} style={styles.avatar} />
                                    ) : (
                                        <View style={[styles.avatar, styles.avatarPlaceholder]}>
                                            
                                        </View>
                                    )}
                                </View>

                                <Text style={styles.name}>Lina Li</Text>
                                <Text style={styles.username}>{username}</Text>
                            </View>
                        ) : (
                            <View style={[styles.card, styles.editCardBorder]}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>Картка профілю</Text>
                                    <TouchableOpacity 
                                        style={styles.saveBtn} 
                                        onPress={() => setIsEditModalVisible(false)}
                                    >
                                        <Text style={styles.saveBtnText}>Зберегти</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.modalSubtitle}>Оберіть або завантажте фото профілю</Text>

                                <View style={styles.modalAvatarContainer}>
                                    {avatar ? (
                                        <Image source={{ uri: avatar }} style={styles.modalAvatar} />
                                    ) : (
                                        <View style={[styles.modalAvatar, styles.avatarPlaceholder]}>
                                        </View>
                                    )}
                                </View>

                                <View style={styles.photoActions}>
                                    <TouchableOpacity style={styles.photoActionBtn} onPress={handlePickImage}>
                                        <Text style={styles.photoActionText}><ICONS.Plus /> Додайте фото</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.photoActionBtn} onPress={handlePickImage}>
                                        <Text style={styles.photoActionText}>Оберіть фото</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.modalName}>Lina Li</Text>

                                <View style={styles.modalInputContainer}>
                                    <Text style={styles.modalInputLabel}>Ім’я користувача</Text>
                                    <TextInput
                                        style={styles.modalInput}
                                        value={username}
                                        onChangeText={setUsername}
                                        placeholder="@thelili"
                                        placeholderTextColor="#999"
                                    />
                                </View>
                            </View>
                        )}

                        <View style={styles.card}>
                            <TouchableOpacity style={styles.editBtn}>
                                <Text><ICONS.Pencil /></Text>
                            </TouchableOpacity>

                            <Text style={styles.sectionTitle}>Особиста інформація</Text>

                            <Text style={styles.label}>Ім’я</Text>
                            <TextInput style={styles.input} value="Li" editable={false} />

                            <Text style={styles.label}>Дата народження</Text>
                            <TextInput style={styles.input} value="15.04.2001" editable={false} />

                            <Text style={styles.label}>Електронна адреса</Text>
                            <TextInput style={styles.input} value="you@example.com" editable={false} />

                            <Text style={styles.label}>Пароль</Text>
                            <TextInput style={styles.input} value="***********" editable={false} />
                            <View style={{ marginTop: 30 }}>
                                <TouchableOpacity style={[styles.editBtn, { marginTop: -20 }]}>
                                    <Text><ICONS.Pencil /></Text>
                                </TouchableOpacity>
                                <Text style={styles.sectionTitle}>Пароль</Text>
                                <TextInput style={styles.input} value="***********" editable={false} />
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
        </View>
    );
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
        position: 'relative',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.blue50,
    },
    tabTextActive: {
        color: COLORS.blue,
        fontWeight: '700',
    },
    indicator: {
        position: 'absolute',
        bottom: 0,
        height: 3,
        width: '100%',
        backgroundColor: COLORS.plum,
        borderRadius: 2,
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        position: "relative",
    },
    editCardBorder: {
        borderWidth: 1,
        borderColor: COLORS.plum,
    },
    editBtn: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.plum,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        alignSelf: "center",
        marginBottom: 10,
    },
    avatarPlaceholder: {
        backgroundColor: COLORS.plum50,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
    username: {
        textAlign: "center",
        color: COLORS.blue50,
        marginBottom: 10,
    },
    sectionTitle: {
        fontWeight: "700",
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        color: COLORS.blue50,
        marginBottom: 4,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.blue50,
        borderRadius: 10,
        padding: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.blue,
    },
    saveBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.plum50,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.plum,
    },
    saveBtnText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.plum,
    },
    modalSubtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.blue,
        marginBottom: 24,
    },
    modalAvatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalAvatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    modalAvatarPlus: {
        fontSize: 32,
        color: COLORS.blue50,
    },
    photoActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 32,
    },
    photoActionBtn: {
        marginHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photoActionText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.plum,
    },
    modalName: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
        color: COLORS.blue,
        marginBottom: 16,
    },
    modalInputContainer: {
        marginBottom: 10,
    },
    modalInputLabel: {
        fontSize: 16,
        color: COLORS.blue50,
        marginBottom: 8,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: COLORS.blue50,
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: COLORS.blue,
        backgroundColor: COLORS.white,
    },
});