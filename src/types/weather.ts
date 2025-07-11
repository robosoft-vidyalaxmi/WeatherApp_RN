import { Feather } from "@expo/vector-icons";

export interface WeatherData {
  temperature: number;
  description: string;
  icon: keyof typeof Feather.glyphMap,
  windspeed: number;
  humidity: number;
  visibility: number;
  tempMin: number;
  tempMax: number;
  precipitation: number;
}