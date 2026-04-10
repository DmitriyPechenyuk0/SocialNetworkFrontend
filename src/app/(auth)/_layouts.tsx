import { Stack } from "expo-router";
import { Header } from "@shared/ui/header/header";
import { View } from "react-native";
import { COLORS } from "@shared/constants/colors";
export default function AuthLayout() {
    return (
        <View style={{ flex: 1 }}>  
            <Header hideSettings={true} hidePlus={true} />

            <Stack 
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: COLORS.fog } 
                }}
            >
                <Stack.Screen name="registration" />
                <Stack.Screen name="login" />
            </Stack>
        </View>
    );
}