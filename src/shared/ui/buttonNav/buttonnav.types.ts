import { ReactNode } from "react";
import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon: ReactNode;
  isactive?: boolean;
  style?: ViewStyle;
  badge?: number;
}