import { StyleSheet, View } from "react-native";
import { ICONS } from "../icons";
import { SafeAreaView } from "react-native-safe-area-context";
const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})

export function Header() {
    return (
        <SafeAreaView edges={['top']} style={style.header} >
            <ICONS.Logo/>
        </SafeAreaView>
    );
}