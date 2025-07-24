import { router } from "expo-router";
import { SavedLocation } from "../models/weather";

export const navigateToCityInfo = (location: SavedLocation) => {
  router.push({
    pathname: "/(modal)/CityInfo",
    params: {
      latitude: location.latitude.toString(),
      longitude: location.longitude.toString(),
      city: location.city ?? "",
      region: location.region ?? "",
      country: location.country ?? "",
    },
  });
};
