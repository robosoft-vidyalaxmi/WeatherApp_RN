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

export const getLocationName = async (latitude: number, longitude: number) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  );
  const data = await res.json();

  return {
    city: data.address.city || data.address.town || data.address.village || null,
    region: data.address.state || null,
    country: data.address.country || null,
  };
};
