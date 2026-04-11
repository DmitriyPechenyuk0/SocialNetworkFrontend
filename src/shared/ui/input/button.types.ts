import { TextInputProps, ViewStyle } from "react-native";

export type FieldType = "default" | "password" | "search" | "link";

export interface InputProps extends TextInputProps {
  label?: string;
  fieldType?: FieldType;
  isValidate?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  links?: string[];
  onLinksChange?: (links: string[]) => void;
}