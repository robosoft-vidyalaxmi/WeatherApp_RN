import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UnitState {
  temperatureUnit: TemperatureUnit;
}

const initialState: UnitState = {
  temperatureUnit: "C",
};

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setTemperatureUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      state.temperatureUnit = action.payload;
    },
  },
});

export const { setTemperatureUnit } = unitSlice.actions;
export default unitSlice.reducer;