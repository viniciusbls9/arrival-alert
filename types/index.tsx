import { TouchableOpacityProps } from "react-native";

export default interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "success" | "outline";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  className?: string;
}
