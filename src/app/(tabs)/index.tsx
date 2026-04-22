import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input";
import { COLORS } from "@shared/constants";
import { FONT_SIZE } from "@shared/constants";
import { baseApi } from "@shared/api/base";

export default function Index() {
	const [firstConnect] = baseApi.useFirstConnectMutation();
	const [firstSignIn, setFirstSignIn] = useState(true);
	const [nickname, setNickname] = useState("");
	const [username, setUsername] = useState("");

	function handleContinue() {
		if (nickname != "" && username !== "") {
			setFirstSignIn(false);
			try {
				// firstConnect({ nickname, username });
				setNickname(nickname);
				setUsername(username);
				console.log("Nickname:", nickname);
				console.log("Username:", username);
			} catch (error) {
				console.error("Error:", error);
			}

		} else {
			console.log("nothing");
		}
	}

	return (
		<View
			style={{ flex: 1, backgroundColor: "#FAF8FF", alignItems: "center", justifyContent: "center" }}
		>
			{firstSignIn ? ( <View style = {{backgroundColor: "#000", width: "100%", height: "500%", opacity: 0.4, position: "absolute", zIndex: 2, marginTop: 50}} /> ) : (null)}
			{ firstSignIn ? 
				(
					<View style = {styles.containerFirstSignIn}>
						<Text style={styles.mainText}>Додай деталі про себе</Text>
						<View style={styles.inputsWrapper}>
							<Input 
								label="Псевдонім автора"
								placeholder="Введіть Псевдонім автора "
								value={nickname}
								onChangeText={setNickname}
							/>
							<View>
								<Input 
									label="Ім’я користувача"
									placeholder="@"
									value={username}
									onChangeText={setUsername}
								/>
								<Text style = {styles.chooseText}>
									Або оберіть: <Text style={[styles.chooseText, { color: COLORS.green }]}>(Запропоновані варіанти відповідно до Ім’я та Прізвища)</Text>
								</Text>
							</View>
						</View>
						<View style = {styles.buttonWrapper}>
							<Button variant="fill" text="Продовжити" style={styles.continueButton} textStyle={styles.continueButtonText} onPress={handleContinue} />
						</View>
					</View>
			) : (null)}
		</View>
	);
}

const styles = StyleSheet.create({
	containerFirstSignIn: {
		backgroundColor: COLORS.white,
		width: "90%",
		alignSelf: "center",
		justifyContent: "center",
		borderRadius: 35,
		paddingHorizontal: 16,
		paddingVertical: 44,
		zIndex: 3,
	},
	continueButton: {
		gap: 8,
		paddingHorizontal: 16,
		paddingVertical: 10,
		backgroundColor: COLORS.plum,
		width: 118,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	continueButtonText: {
		fontSize: FONT_SIZE.defaultP,
		color: COLORS.white,
		fontWeight: "500",
	},
	mainText: {
		fontSize: FONT_SIZE.title,
		color: COLORS.blue,
		fontWeight: "500",
		gap: 10,
		width: "100%",
		textAlign: "center",
	},
	chooseText: {
		fontSize: FONT_SIZE.defaultP,
		color: COLORS.blue,
		fontWeight: "400",
		width: "100%",
	},
	buttonWrapper: {
		flexDirection: "row",
		justifyContent: "flex-end",
		width: "100%",
	},
	inputsWrapper: {
		width: "100%",
		paddingVertical: 24,
		gap: 16,
	}
});