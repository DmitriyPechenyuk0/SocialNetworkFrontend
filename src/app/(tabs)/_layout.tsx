import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { StyleSheet } from "react-native";
import { Header } from "../../shared/ui/header/header";

const style = StyleSheet.create({
  backg: {
    backgroundColor: "#FAF8FF"
  }
})
export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "blue", header: () => <Header/>}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Головна",
					tabBarIcon: () => <ICONS.HomeIcon fill={"none"} />,
          
				}}
			/>
			<Tabs.Screen
				name="my-publications"
				options={{
					title: "Мої Публікації",
					tabBarIcon: () => (
						<ICONS.MyPublicationsIcon fill={"none"} />
					),
				}}
			/>
			<Tabs.Screen
				name="friends"
				options={{
					title: "Друзі",
					tabBarIcon: () => <ICONS.FriendsIcon />,
				}}
			/>
			<Tabs.Screen
				name="chats"
				options={{
					title: "Чати",
					tabBarIcon: () => <ICONS.ChatsIcon fill={"none"} />,
				}}
			/>
		</Tabs>
	);
}