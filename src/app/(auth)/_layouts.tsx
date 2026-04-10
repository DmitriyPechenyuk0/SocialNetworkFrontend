import { Stack } from "expo-router";
import { View } from "react-native";
import { COLORS } from "@shared/constants/colors";
export default function AuthLayout() {
    return (
        <View style={{ flex: 1 }}>  

            <Stack 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="registration" />
                <Stack.Screen name="login" />
            </Stack>
        </View>
    );
}