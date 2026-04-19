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
import { FONT_SIZE } from "@shared/constants";

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

            <ScrollView contentContainerStyle={[{ backgroundColor: COLORS.plum50}]}>
                {activeTab === 'info' && (
                    <>
                        {!isEditModalVisible ? (
                            <View style={styles.card}>
                                <View style={[{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 70}]}>
                                    <Text style={[styles.sectionTitle, {left: 10}]}>Картка профілю</Text>
                                    <TouchableOpacity 
                                        style={styles.editBtn} 
                                        onPress={() => setIsEditModalVisible(true)}
                                    >
                                        <Text><ICONS.Pencil /></Text>
                                    </TouchableOpacity>
                                </View>

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
                                        <ICONS.Pencil />
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
                                        <Text style={styles.photoActionText}><ICONS.Photo /> Оберіть фото</Text>
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

                            <Text style={[styles.sectionTitle, {marginTop: 20}]}>Особиста інформація</Text>

                            <Text style={styles.label}>Ім’я</Text>
                            <TextInput style={styles.input} value="Li" editable={false} />

                            <Text style={styles.label}>Дата народження</Text>
                            <TextInput style={styles.input} value="15.04.2001" editable={false} />

                            <Text style={styles.label}>Електронна адреса</Text>
                            <TextInput style={styles.input} value="you@example.com" editable={false} />

                            <Text style={styles.label}>Пароль</Text>
                            <TextInput style={styles.input} value="***********" editable={false} />
                            <View style={{ marginTop: 25 }}>
                                <View style = {{alignItems: "center", justifyContent: "space-between"}}>
                                    <TouchableOpacity style={[styles.editBtn, { marginTop: -20 }]}>
                                        <Text><ICONS.Pencil /></Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.sectionTitle}>Пароль</Text>
                            </View>
                            <Text style={styles.label}>Пароль</Text>
                            <TextInput style={[styles.input, { marginTop: 10 }]} value="***********" editable={false} />
                        </View>

                        <View style={styles.card}>
                            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Варіанти підпису</Text>
                            <View style={styles.signatureCheckboxRow}>
                                <ICONS.CheckboxChecked />
                                <Text style={styles.signatureCheckboxLabel}>Псевдонім автора</Text>
                            </View>

                            <Text style={styles.signatureNameText}>Lina Li</Text>

                            <View style={styles.signatureCheckboxRow}>
                                <ICONS.CheckboxChecked />
                                <Text style={styles.signatureCheckboxLabel}>Мій електронний підпис</Text>
                            </View>

                            <View style={styles.signatureImageContainer}>
                                <Image source={require("../../../assets/signature.png")} style={styles.signatureImage} />
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
        backgroundColor: COLORS.plum50,
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: COLORS.plum50,
        paddingTop: 18,
        marginBottom: 18,
    },
    tab: {
        marginRight: 20,
        paddingBottom: 6,
        alignItems: 'center',
        position: 'relative',
    },
    tabText: {
        fontSize: FONT_SIZE.smallTitle,
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
        height: 2,
        width: '100%',
        backgroundColor: COLORS.plum,
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.blue20,
        padding: 16,
        paddingTop: 0,
        marginBottom: 16,
        width: '100%',
        position: "relative",
    },
    editCardBorder: {
        borderWidth: 1,
        borderColor: COLORS.plum,
    },
    editBtn: {
        position: "absolute",
        top: 15,
        right: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
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
        fontSize: FONT_SIZE.title,
        fontWeight: "700",
    },
    username: {
        textAlign: "center",
        color: COLORS.blue,
        marginTop: 8,
        marginBottom: 2,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.smallTitle,
        fontWeight: "700",
        marginBottom: 10,
    },
    label: {
        fontSize: FONT_SIZE.defaultP,
        color: COLORS.blue50,
        marginBottom: 4,
        marginTop: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.blue20,
        borderRadius: 10,
        padding: 12,
        fontSize: FONT_SIZE.defaultP,
        color: COLORS.blue50,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    modalTitle: {
        fontSize: FONT_SIZE.smallTitle,
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
        gap: 6,
    },
    saveBtnText: {
        fontSize: FONT_SIZE.defaultP,
        fontWeight: '600',
        color: COLORS.plum,
    },
    modalSubtitle: {
        fontSize: FONT_SIZE.smallTitle,
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
        fontSize: FONT_SIZE.smallTitle,
        fontWeight: '600',
        color: COLORS.plum,
        textAlign: 'center',
    },
    modalName: {
        fontSize: FONT_SIZE.title,
        fontWeight: '800',
        textAlign: 'center',
        color: COLORS.blue,
        marginBottom: 16,
    },
    modalInputContainer: {
        marginBottom: 10,
    },
    modalInputLabel: {
        fontSize: FONT_SIZE.smallTitle,
        color: COLORS.blue50,
        marginBottom: 8,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: COLORS.blue50,
        borderRadius: 12,
        padding: 14,
        fontSize: FONT_SIZE.smallTitle,
        color: COLORS.blue,
        backgroundColor: COLORS.white,
    },
    signatureCheckboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 8,
    },
    signatureCheckboxLabel: {
        fontSize: FONT_SIZE.smallTitle,
        color: "#aa9ea9",
        marginLeft: 10,
    },
    signatureNameText: {
        fontSize: FONT_SIZE.smallTitle,
        fontWeight: '500',
        color: COLORS.blue,
        marginTop: 4,
        marginBottom: 16,
        marginLeft: 4,
    },
    signatureImageContainer: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    signatureImage: {
        width: '40%',
        height: 80,
        resizeMode: 'contain',
    },
});