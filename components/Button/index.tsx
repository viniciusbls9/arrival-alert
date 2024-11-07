import { theme } from "@/constants";
import ButtonProps from "@/types";
import { getBgVariantStyle, getTextVariantStyle } from "@/utils";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

const Button = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "secondary",
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    testID="touchable-button"
    onPress={onPress}
    className={`w-full h-[${theme.sizes.medium}px] rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
  >
    <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;
