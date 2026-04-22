import { Stack } from "expo-router";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../../app/store";

export default function AuthLayout() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>  
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="registration" />
                    <Stack.Screen name="login" />
                </Stack>
            </View>
        </Provider>
    );
}