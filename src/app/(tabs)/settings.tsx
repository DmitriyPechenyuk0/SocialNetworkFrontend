import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    TextInput
} from 'react-native';
import SignatureCanvas, { SignatureViewRef } from 'react-native-signature-canvas';
import { COLORS } from "@shared/constants";
import { pickImage } from "@shared/utils/pickImage";
import { ICONS } from "@shared/ui/icons";
import { FONT_SIZE } from "@shared/constants";

export default function Settings() {
    const [activeTab, setActiveTab] = useState<'info' | 'albums'>('info');
    const [avatar, setAvatar] = useState<string | null>(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [username, setUsername] = useState('@thelili');
    const [isEditingSignature, setIsEditingSignature] = useState(false);
    const [savedSignature, setSavedSignature] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState('#6B3F72');
    const signatureRef = useRef<SignatureViewRef>(null);

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

    const handleSignatureSave = () => {
        signatureRef.current?.readSignature();
    };

    const handleSignatureOK = (signature: string) => {
        setSavedSignature(signature);
        setIsEditingSignature(false);
    };

    const handleSignatureClear = () => {
        signatureRef.current?.clearSignature();
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        signatureRef.current?.changePenColor(color);
    };

    const signatureWebStyle = `
        .m-signature-pad { box-shadow: none; border: none; }
        .m-signature-pad--body { border: none; }
        .m-signature-pad--footer { display: none; }
        body, html { background-color: transparent; margin: 0; padding: 0; }
    `;

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

            <ScrollView contentContainerStyle={{ backgroundColor: COLORS.plum50 }}>
                {activeTab === 'info' && (
                    <>
                        {!isEditModalVisible ? (
                            <View style={styles.card}>
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 70 }}>
                                    <Text style={[styles.sectionTitle, { left: 10 }]}>Картка профілю</Text>
                                    <TouchableOpacity
                                        style={styles.editBtn}
                                        onPress={() => setIsEditModalVisible(true)}
                                    >
                                        <Text><ICONS.Pencil /></Text>
                                    </TouchableOpacity>
                                </View>

                                {avatar ? (
                                    <Image source={{ uri: avatar }} style={styles.avatar} />
                                ) : (
                                    <View style={[styles.avatar, styles.avatarPlaceholder]} />
                                )}

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
                                        <View style={[styles.modalAvatar, styles.avatarPlaceholder]} />
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
                                    <Text style={styles.modalInputLabel}>Ім'я користувача</Text>
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

                            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Особиста інформація</Text>

                            <Text style={styles.label}>Ім'я</Text>
                            <TextInput style={styles.input} value="Li" editable={false} />

                            <Text style={styles.label}>Дата народження</Text>
                            <TextInput style={styles.input} value="15.04.2001" editable={false} />

                            <Text style={styles.label}>Електронна адреса</Text>
                            <TextInput style={styles.input} value="you@example.com" editable={false} />

                            <Text style={styles.label}>Пароль</Text>
                            <TextInput style={styles.input} value="***********" editable={false} />

                            <View style={{ marginTop: 25 }}>
                                <View style={{ alignItems: "center", justifyContent: "space-between" }}>
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

                            {!isEditingSignature ? (
                                <View>
                                    <View style={styles.signaturePreviewBox}>
                                        {savedSignature ? (
                                            <Image
                                                source={{ uri: savedSignature }}
                                                style={styles.signaturePreviewImage}
                                                resizeMode="contain"
                                            />
                                        ) : (
                                            <Image
                                                source={require("../../../assets/signature.png")}
                                                style={styles.signaturePreviewImage}
                                                resizeMode="contain"
                                            />
                                        )}
                                    </View>
                                    <TouchableOpacity
                                        style={styles.editSignatureBtn}
                                        onPress={() => setIsEditingSignature(true)}
                                    >
                                        <Text style={styles.editSignatureBtnText}>Редагувати підпис</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View>
                                    <View style={styles.canvasWrapper}>
                                        <SignatureCanvas
                                            ref={signatureRef}
                                            onOK={handleSignatureOK}
                                            onEmpty={() => {}}
                                            descriptionText=""
                                            clearText="Отчистити"
                                            confirmText="Зберегти"
                                            webStyle={signatureWebStyle}
                                            penColor={selectedColor}
                                            backgroundColor="transparent"
                                            style={styles.canvas}
                                        />
                                    </View>

                                    <View style={styles.colorRow}>
                                        <TouchableOpacity
                                            onPress={() => handleColorChange(COLORS.plum)}
                                            style={[
                                                styles.colorDot,
                                                { backgroundColor: COLORS.plum },
                                                selectedColor === COLORS.plum && styles.colorDotSelected,
                                            ]}
                                        />
                                        <TouchableOpacity
                                            onPress={() => handleColorChange(COLORS.blue)}
                                            style={[
                                                styles.colorDot,
                                                { backgroundColor: COLORS.blue },
                                                selectedColor === COLORS.blue && styles.colorDotSelected,
                                            ]}
                                        />
                                    </View>

                                    <View style={styles.signatureActionRow}>
                                        <TouchableOpacity
                                            style={styles.signatureActionBtn}
                                            onPress={handleSignatureClear}
                                        >
                                            <Text style={styles.signatureActionBtnText}>Отчистити</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.signatureActionBtn}
                                            onPress={handleSignatureSave}
                                        >
                                            <Text style={styles.signatureActionBtnText}>Зберегти</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
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
        position: 'relative',
    },
    editCardBorder: {
        borderWidth: 1,
        borderColor: COLORS.plum,
    },
    editBtn: {
        position: 'absolute',
        top: 15,
        right: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.plum,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        alignSelf: 'center',
        marginBottom: 10,
    },
    avatarPlaceholder: {
        backgroundColor: COLORS.plum50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        textAlign: 'center',
        fontSize: FONT_SIZE.title,
        fontWeight: '700',
    },
    username: {
        textAlign: 'center',
        color: COLORS.blue,
        marginTop: 8,
        marginBottom: 2,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.smallTitle,
        fontWeight: '700',
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
        color: '#aa9ea9',
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
    signaturePreviewBox: {
        borderWidth: 1,
        borderColor: COLORS.blue20,
        borderRadius: 12,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 12,
    },
    signaturePreviewImage: {
        width: '70%',
        height: 80,
    },
    editSignatureBtn: {
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: COLORS.blue20,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    editSignatureBtnText: {
        fontSize: FONT_SIZE.defaultP,
        color: COLORS.blue,
        fontWeight: '500',
    },
    canvasWrapper: {
        borderWidth: 1,
        borderColor: COLORS.blue20,
        borderRadius: 12,
        overflow: 'hidden',
        height: 180,
        marginTop: 8,
        marginBottom: 16,
    },
    canvas: {
        flex: 1,
    },
    colorRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 16,
    },
    colorDot: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    colorDotSelected: {
        borderWidth: 2.5,
        borderColor: COLORS.white,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 },
        elevation: 4,
    },
    signatureActionRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 8,
    },
    signatureActionBtn: {
        borderWidth: 1,
        borderColor: COLORS.blue20,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    signatureActionBtnText: {
        fontSize: FONT_SIZE.defaultP,
        color: COLORS.blue,
        fontWeight: '500',
    },
});