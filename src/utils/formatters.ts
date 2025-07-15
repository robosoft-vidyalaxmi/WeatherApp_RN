import { getDisplayTemperature } from "./temperature";

export const formatPercent = (value?: number): string =>
  value !== undefined ? `${Math.floor(value)}%` : "—";

export const formatKMH = (value?: number): string =>
  value !== undefined ? `${Math.floor(value)} km/h` : "—";

export const formatMeters = (value?: number): string =>
  value !== undefined ? `${value} m` : "—";

export const formatTemperatureRange = (
  min: number,
  max: number,
  unit: "C" | "F"
): string => `${getDisplayTemperature(min, unit)}° - ${getDisplayTemperature(max, unit)}°`;
