// src/utils/temperature.ts
import { TemperatureUnit } from "@/src/types/temperatureUnit";
/**
 * Converts a temperature number to the display format based on the unit.
 * @param temperature - The temperature as a number.
 * @param unit - The temperature unit, either "C" for Celsius or "F" for Fahrenheit.
 * @returns The formatted temperature as a string.
 */
export const getDisplayTemperature = (
  temperature: number,
  unit: TemperatureUnit
): string => {
  if (isNaN(temperature)) return "";
  return unit === "C"
      ? Math.floor(temperature).toString()
      : Math.floor((temperature * 9) / 5 + 32).toString();
};
