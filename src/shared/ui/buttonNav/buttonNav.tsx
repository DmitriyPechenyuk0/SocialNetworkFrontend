import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "./buttonnav.types";
import { styles } from "./button.styles";

export function ButtonNav(props: ButtonProps) {
  const { title, icon, isactive, onPress, style, badge, ...restProps } = props;

  return (
    <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.button, style]}
        {...restProps}
    >
        {isactive && <View style={styles.unperline} />}
        <View style={styles.iconContainer}>
            {icon}
            {badge ? (
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{badge}</Text>
                </View>
            ) : null}
        </View>
      
        <Text style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}