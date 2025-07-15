import { LocationData } from "../types/location";

export const getLocationName = (location: LocationData): string => {
  if (!location) return "";
  return `${location?.city ?? ""}, ${location?.region ?? ""}`;
};

export const normalizeCoords = (lat: number, lon: number, precision = 3) => ({
  latitude: parseFloat(lat.toFixed(precision)),
  longitude: parseFloat(lon.toFixed(precision)),
});