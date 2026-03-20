import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { StyleSheet, View } from "react-native";
import { Header } from "../../shared/ui/header/header";

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
          title: "Головна",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderTopColor: focused ? "blue" : "transparent",
                paddingTop: 6,
                alignItems: "center",
              }}
            >
              <ICONS.HomeIcon fill={"none"} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="my-publications"
        options={{
          title: "Мої Публікації",
		  
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderTopColor: focused ? "blue" : "transparent",
                paddingTop: 6,
                alignItems: "center",
              }}
            >
              <ICONS.MyPublicationsIcon fill={"none"}  />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Друзі",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderTopColor: focused ? "blue" : "transparent",
                paddingTop: 6,
                alignItems: "center",
              }}
            >
              <ICONS.FriendsIcon fill={ "none"}  />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Чати",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderTopWidth: 2,
                borderTopColor: focused ? "blue" : "transparent",
                paddingTop: 6,
                alignItems: "center",
              }}
            >
              <ICONS.ChatsIcon fill={"none"}  />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
