import { LocationData } from "@/src/types/location";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecentSearchesState {
  locations: LocationData[];
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
    addRecentSearch: (state, action: PayloadAction<LocationData>) => {
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
  },
});

export const { addRecentSearch, clearRecentSearches } = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
