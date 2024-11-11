import { ImageProps, TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "success" | "outline";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  className?: string;
}

export interface OnboardingProps {
  onboarding: {
    description: string;
    image: ImageProps;
    title: string;
  }[];
}
