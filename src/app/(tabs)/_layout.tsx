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
        tabBarItemStyle: {
          flexDirection: "row",
          justifyContent: 'space-around'
        },
        tabBarStyle:{
          justifyContent: 'center',
          alignItems: 'center'
        }
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
								width: "auto",
								marginTop: 4,
								paddingHorizontal: 6,
							}}
						>
							<ICONS.HomeIcon fill="none" />
							<Text
								style={{
									width: "100%",
								}}
							>
								Головна
							</Text>
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
								width: "auto",
								marginTop: 4,
								paddingHorizontal: 6,
							}}
						>
							<ICONS.MyPublicationsIcon fill="none" />
							<Text
								style={{
									width: "130%",
								}}
							>
								Мої Публікації
							</Text>
						</View>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="friends"
				options={{
					title: "",
					header: () => <Header hidePlus />,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								borderTopWidth: 2,
								paddingTop: 6,
								alignItems: "center",
								borderTopColor: focused
									? COLORS.plum
									: "transparent",
								width: "auto",
								marginTop: 4,
								paddingHorizontal: 6,
							}}
						>
							<ICONS.FriendsIcon fill="none" />
							<Text
								style={{
									width: "100%",
								}}
							>
								Друзі
							</Text>
						</View>
					),
				}}
			></Tabs.Screen>
			<Tabs.Screen
				name="chats"
				options={{
					title: "",
					header: () => <Header hideSettings />,
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								borderTopWidth: 2,
								paddingTop: 6,
								alignItems: "center",
								borderTopColor: focused
									? COLORS.plum
									: "transparent",
								width: "auto",
								marginTop: 4,
								paddingHorizontal: 6,
							}}
						>
							<ICONS.ChatsIcon fill="none" />
							<Text
								style={{
									width: "100%",
								}}
							>
								Чати
							</Text>
						</View>
					),
				}}
			></Tabs.Screen>
			
			<Tabs.Screen
                name="settings"
				options={{
					href: null
				}}
            />
		</Tabs>
	);
}
