import { SavedLocation, WeatherData } from "../models/weather";
import {
    addFavorite,
    removeFavorite,
    updateWeather,
} from "../store/redux/slices/favorite-slice";
import { useAppDispatch, useAppSelector } from "../store/redux/store";
import { isFavorite } from "../store/selectors/favoritesSelectors";
import { LocationData } from "../types/location";

export const useFavoriteLocation = (location: LocationData | null) => {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.favorites.locations);
  const isFav = useAppSelector((state) =>
    location ? isFavorite(state, location.latitude, location.longitude) : false
  );

  const toggleFavorite = (weather?: WeatherData | null) => {
    if (!location) return;

    const payload: SavedLocation = {
      ...location,
      ...(weather ? { weather } : {}),
    };

    if (isFav) {
      dispatch(removeFavorite(location));
    } else { 
      dispatch(addFavorite(payload));
    }
  };

  const updateFavoriteWeather = (weather: WeatherData) => {
    if (!location) return;

    dispatch(
      updateWeather({
        lat: location.latitude,
        lon: location.longitude,
        weather,
      })
    );
  };

  return {
    favorites,
    isFavorite: isFav,
    toggleFavorite,
    updateFavoriteWeather,
  };
};
