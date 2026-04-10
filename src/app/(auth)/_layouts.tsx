import { Stack } from "expo-router";
import { Header } from "@shared/ui/header/header";
export default function AuthLayout() {
    return (
        <>  
            <Header hideSettings={true} hidePlus={true} />

            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="registration" />
                <Stack.Screen name="login" />
            </Stack>
        </>
    );
}