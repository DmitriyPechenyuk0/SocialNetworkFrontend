import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout (){
    return (
        <>
            <StatusBar style="light" />
            <SafeAreaProvider>
                <Stack>
                    <Stack.Screen
                    name='index'
                    options={{
                        headerShown: true
                    }}
                    />

                    <Stack.Screen
                    name='myPublications'
                    options={{
                        headerShown: true
                    }}

                    />

                    <Stack.Screen
                    name='friends'
                    options={{
                        headerShown: true
                    }}

                    />
                    <Stack.Screen
                    name='chats'
                    options={{
                        headerShown: true
                    }}

                    />

                </Stack>
            </SafeAreaProvider>
        </>
    )
}