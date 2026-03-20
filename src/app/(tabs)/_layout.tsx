import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "../../shared/ui/header/header";
import { COLORS } from "@shared/constants";

const style = StyleSheet.create({
	backg: {
		backgroundColor: "#FAF8FF",
	},
});
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				header: () => <Header />,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "",
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								borderTopWidth: 2,
								paddingTop: 6,
								alignItems: "center",
								borderTopColor: focused
									? COLORS.plum
									: "transparent",
								width: "300%",
								marginTop: 4,
							}}
						>
							<ICONS.HomeIcon fill="none" />
							<Text>Головна</Text>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="my-publications"
				options={{
					title: "",
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								borderTopWidth: 2,
								paddingTop: 6,
								alignItems: "center",
								borderTopColor: focused
									? COLORS.plum
									: "transparent",
								width: "300%",
								marginTop: 4,
							}}
						>
							<ICONS.MyPublicationsIcon fill="none" />
							<Text>Мої Публікації</Text>
						</View>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="friends"
				options={{
					title: "",
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								borderTopWidth: 2,
								paddingTop: 6,
								alignItems: "center",
								borderTopColor: focused
									? COLORS.plum
									: "transparent",
								width: "300%",
								marginTop: 4,
							}}
						>
							<ICONS.FriendsIcon fill="none" />
							<Text>Друзі</Text>
						</View>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="chats"
				options={{
					title: "",
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								borderTopWidth: 2,
								paddingTop: 6,
								alignItems: "center",
								borderTopColor: focused
									? COLORS.plum
									: "transparent",
								width: "300%",
								marginTop: 4,
							}}
						>
							<ICONS.ChatsIcon fill="none" />
							<Text>Чати</Text>
						</View>
					),
				}}
			></Tabs.Screen>
		</Tabs>
	);
}
