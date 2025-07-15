import { useCurrentLocation } from "./useCurrentLocation";
import { useFavoriteLocation } from "./useFavoriteLocation";
import { useWeather } from "./useWeather";

export const useLocationAndWeatherInfo = () => {
  const {
    location,
    loading: locationLoading,
    error: locationError,
  } = useCurrentLocation();

  const {
    weather,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather(location?.latitude, location?.longitude);

  const { isFavorite, toggleFavorite } = useFavoriteLocation(location);

  return {
    location,
    weather,
    isFavorite,
    toggleFavorite,
    loading: locationLoading || weatherLoading,
    error: locationError || weatherError,
  };
};
