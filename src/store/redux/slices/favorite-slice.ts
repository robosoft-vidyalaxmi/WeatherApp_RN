import { LocationData } from "@/src/types/location";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FavoritesState {
  locations: LocationData[];
}

const initialState: FavoritesState = {
  locations: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<LocationData>) => {
      const exists = state.locations.find(
        (loc) =>
          loc.latitude === action.payload.latitude &&
          loc.longitude === action.payload.longitude
      );
      if (!exists) {
        state.locations.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<LocationData>) => {
      state.locations = state.locations.filter(
        (loc) =>
          loc.latitude !== action.payload.latitude ||
          loc.longitude !== action.payload.longitude
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
