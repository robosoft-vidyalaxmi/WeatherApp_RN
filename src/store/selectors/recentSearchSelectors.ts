import { RootState } from "../redux/store";

export const isRecentSearch = (
  state: RootState,
  latitude: number,
  longitude: number
): boolean => {
  return state.recentSearch.locations.some(
    (loc) => loc.latitude === latitude && loc.longitude === longitude
  );
};