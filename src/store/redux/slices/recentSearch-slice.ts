import { SavedLocation, WeatherData } from "@/src/models/weather";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecentSearchesState {
  locations: SavedLocation[];
  maxHistoryLength: number;
}

const initialState: RecentSearchesState = {
  locations: [],
  maxHistoryLength: 5, // keep only last 5 searches
};

const recentSearchSlice = createSlice({
  name: "recentSearches",
  initialState,
  reducers: {
    addRecentSearch: (state, action: PayloadAction<SavedLocation>) => {
      const existingIndex = state.locations.findIndex(
        (loc) =>
          loc.latitude === action.payload.latitude &&
          loc.longitude === action.payload.longitude
      );

      // Remove if already exists (to re-add on top)
      if (existingIndex !== -1) {
        state.locations.splice(existingIndex, 1);
      }

      // Add to top
      state.locations.unshift(action.payload);

      // Limit length
      if (state.locations.length > state.maxHistoryLength) {
        state.locations.pop();
      }
    },

    clearRecentSearches: (state) => {
      state.locations = [];
    },
    updateRecentSearchWeather: (
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

export const { addRecentSearch, clearRecentSearches, updateRecentSearchWeather } = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
