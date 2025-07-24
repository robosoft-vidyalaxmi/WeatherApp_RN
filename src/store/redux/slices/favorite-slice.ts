import { SavedLocation, WeatherData } from "@/src/models/weather";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  locations: SavedLocation[];
}

const initialState: FavoritesState = {
  locations: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<SavedLocation>) => {
      const exists = state.locations.find(
        (loc) =>
          loc.latitude === action.payload.latitude &&
          loc.longitude === action.payload.longitude
      );
      if (!exists) {
        state.locations.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<SavedLocation>) => {
      state.locations = state.locations.filter(
        (loc) =>
          loc.latitude !== action.payload.latitude ||
          loc.longitude !== action.payload.longitude
      );
    },
    clearAllFavorites: (state) => {
      state.locations = [];
    },
    updateWeather: (
      state,
      action: PayloadAction<{
        lat: number;
        lon: number;
        weather: WeatherData;
      }>
    ) => {
      const loc = state.locations.find(
        (l) =>
          l.latitude === action.payload.lat &&
          l.longitude === action.payload.lon
      );
      if (loc) {
        loc.weather = action.payload.weather;
      }
    },
  },
});

export const { addFavorite, removeFavorite, clearAllFavorites, updateWeather } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
