import { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { ButtonNav } from "@shared/ui/buttonNav";
import { ICONS } from "../../shared/ui/icons";
// Импортируем наш компонент Input
import { Input } from "../../shared/ui/input";

export default function Chats() {
    const [activeTab, setActiveTab] = useState("messages");

    // Состояния для различных инпутов
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [links, setLinks] = useState<string[]>([]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tabsRow}>
                <ButtonNav
                    title="Контакти"
                    isactive={activeTab === "contacts"}
                    onPress={() => setActiveTab("contacts")}
                    icon={<ICONS.FriendsIcon color={"#000"} />}
                />

                <ButtonNav
                    title="Повідомлення"
                    isactive={activeTab === "messages"}
                    onPress={() => setActiveTab("messages")}
                    icon={<ICONS.ChatsIcon color={"#000"} />}
                />

                <ButtonNav
                    title="Групові чати"
                    isactive={activeTab === "groups"}
                    onPress={() => setActiveTab("groups")}
                    icon={<ICONS.ChatsIcon color={"#000"} />}
                />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                
                <Input
                    label="m"
                    placeholder="w"
                    fieldType="search"
                    value={search}
                    onChangeText={setSearch}
                    containerStyle={styles.inputMargin}
                />

                <Input
                    label="w"
                    placeholder="s"
                    fieldType="default"
                    value={message}
                    onChangeText={setMessage}
                    containerStyle={styles.inputMargin}
                />

                <Input
                    label="s"
                    placeholder="a"
                    fieldType="link"
                    links={links}
                    onLinksChange={setLinks}
                    containerStyle={styles.inputMargin}
                />

                <Input
                    label="a"
                    placeholder="a"
                    fieldType="password"
                    value={password}
                    onChangeText={setPassword}
                    containerStyle={styles.inputMargin}
                />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF8FF",
    },
    tabsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingBottom: 10,
    },
    content: {
        padding: 16,
    },
    inputMargin: {
        marginBottom: 20,
    },
});