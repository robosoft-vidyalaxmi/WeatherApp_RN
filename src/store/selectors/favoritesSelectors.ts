import { LocationData } from "@/src/types/location";
import { RootState } from "../redux/store";

export const isFavorite = (
  state: RootState,
  latitude: number,
  longitude: number
): boolean => {
  return state.favorites.locations.some(
    (loc) => loc.latitude === latitude && loc.longitude === longitude
  );
};

/**
 * Selector to get all favorite locations.
 */
export const getFavorites = (state: RootState): LocationData[] =>
  state.favorites.locations;
