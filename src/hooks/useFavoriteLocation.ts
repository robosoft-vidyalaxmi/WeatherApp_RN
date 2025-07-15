import { addFavorite, removeFavorite } from "../store/redux/slices/favorite-slice";
import { useAppDispatch, useAppSelector } from "../store/redux/store";
import { isFavorite } from "../store/selectors/favoritesSelectors";
import { LocationData } from "../types/location";


/**
 * Custom hook to manage favorite locations.
 */
export const useFavoriteLocation = (location: LocationData | null) => {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.favorites.locations);
  const isFav = useAppSelector((state) =>
    location ? isFavorite(state, location.latitude, location.longitude) : false
  );

  const toggleFavorite = () => {
    if (!location) return;
    if (isFav) {
      dispatch(removeFavorite(location));
    } else {
      dispatch(addFavorite(location));
    }
  };

  return {
    favorites,
    isFavorite: isFav,
    toggleFavorite,
  };
};
