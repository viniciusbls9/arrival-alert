import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);

  const requestLocationPermissions = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
      console.log(currentPosition);
    }
  };

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return <SafeAreaView></SafeAreaView>;
};

export default Home;
