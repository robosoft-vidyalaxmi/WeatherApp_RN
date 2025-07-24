import { Feather } from "@expo/vector-icons";
import { LocationData } from "../types/location";

export interface WeatherData {
  temperature: number;
  condition: string;
  icon: keyof typeof Feather.glyphMap,
  windspeed: number;
  humidity: number;
  visibility: number;
  tempMin: number;
  tempMax: number;
  precipitation: number;
}

export interface SavedLocation extends LocationData {
  weather?: WeatherData;
}