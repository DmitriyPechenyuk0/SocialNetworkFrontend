import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { ButtonNav } from "@shared/ui/buttonNav";
import { ICONS } from "../../shared/ui/icons";

export default function Chats() {
  	const [activeTab, setActiveTab] = useState("messages");

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
  	},
});