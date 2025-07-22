import { LocationResponse } from "../network/models/Location/locationModel";
import { LocationData } from "../types/location";

export const getLocationName = (location: LocationData): string => {
  if (!location) return "";

  const { city, region, country } = location;
  const regionName = region || country
  if (city && regionName) return `${city}, ${regionName}`;
  if (city) return city;
  if (regionName) return regionName;

  return "";
};

export const mapToLocationData = (item: LocationResponse): LocationData | null => {
  const city = item.address?.city ?? item.address?.town ?? item.address?.village ?? item.address.district;

  if (!city) return null; // skip items without city/town/village

  return {
    latitude: parseFloat(item.lat),
    longitude: parseFloat(item.lon),
    city,
    region: item.address?.state,
    country: item.address?.country,
  };
};


export const normalizeCoords = (lat: number, lon: number, precision = 3) => ({
  latitude: parseFloat(lat.toFixed(precision)),
  longitude: parseFloat(lon.toFixed(precision)),
});