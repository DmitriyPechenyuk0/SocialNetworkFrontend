import { StyleSheet, View } from "react-native";
import { ICONS } from "../icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../button";
import { useRouter, Href } from "expo-router";
type HeaderProps = {
  	hideSettings?: boolean;
	hidePlus?: boolean;
};

const style = StyleSheet.create({
	header: {
		flexDirection: "row",
		height: 80,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingHorizontal: 20,
	},
	buttons: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
});

export function Header({ hideSettings = false, hidePlus = false }: HeaderProps) {
	const router = useRouter();

  	return (
  	  	<SafeAreaView edges={["top"]} style={style.header}>
  	  	  	<ICONS.Logo />
		
  	  	  	<View style={style.buttons}>
				{!hidePlus && (
					<Button variant="outline" iconRight={<ICONS.Plus />} />
				)}
  	  	  	  	{!hideSettings && (
  	  	  	  	  	<Button 
                	    variant="outline" 
                	    iconRight={<ICONS.Settings />} 
                	    onPress={() => router.push('/settings' as Href)} 
                	/>
  	  	  	  	)}
  	  	  	  	<Button variant="outline" iconRight={<ICONS.Logout />} />
  	  	  	</View>
  	  	</SafeAreaView>
  	);
}