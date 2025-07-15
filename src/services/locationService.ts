import * as Location from "expo-location";

// Get coordinates
export const getLocationCoords = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    throw new Error("Location permission not granted");
  }

  const location = await Location.getCurrentPositionAsync({});
  return location.coords;
};
