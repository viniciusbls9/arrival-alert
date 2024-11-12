import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  requestBackgroundPermissionsAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { ButtonProps } from "@/types";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  const variants = {
    primary: "bg-primary-500",
    secondary: "bg-gray-500",
    danger: "bg-red-500",
    success: "bg-green-500",
    outline: "bg-transparent border-neutral-300 border-[0.5px]",
  };

  return variants[variant!];
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  const variants = {
    primary: "text-black",
    secondary: "text-gray-100",
    danger: "text-red-100",
    success: "text-green-100",
    default: "bg-primary-500",
  };

  return variants[variant!];
};

const requestLocationPermissions = async (
  setLocation: (value: React.SetStateAction<LocationObject | null>) => void,
) => {
  const { granted } = await requestForegroundPermissionsAsync();
  const { granted: backgroundGranted } =
    await requestBackgroundPermissionsAsync();

  if (granted && backgroundGranted) {
    const currentPosition = await getCurrentPositionAsync();
    setLocation(currentPosition);
  }
};

const watchUserPosition = ({ callback }: { callback: Function }) => {
  watchPositionAsync(
    {
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    },
    (response) => {
      callback(response);
    },
  );
};

export {
  getBgVariantStyle,
  getTextVariantStyle,
  requestLocationPermissions,
  watchUserPosition,
};
