import {
  LocationObject,
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

export const requestUserLocationPermissions = async (
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
