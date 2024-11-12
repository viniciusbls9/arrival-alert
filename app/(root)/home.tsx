import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { LocationObject } from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  requestLocationPermissions,
  watchUserPosition,
} from "@/src/utils/utils";

const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    requestLocationPermissions(setLocation);
  }, []);

  useEffect(() => {
    watchUserPosition({
      callback: (response: LocationObject) => setLocation(response),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 flex items-center justify-center">
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
