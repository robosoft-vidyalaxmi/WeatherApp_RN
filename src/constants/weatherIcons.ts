import { Feather } from "@expo/vector-icons";
export const weatherIcons: Record<number, keyof typeof Feather.glyphMap> = {
  0: "sun", // Clear sky
  1: "sun",
  2: "cloud", // Partly cloudy
  3: "cloud", // Overcast
  45: "cloud", // Fog
  48: "cloud", // Depositing rime fog
  51: "cloud-drizzle", // Drizzle: Light
  53: "cloud-drizzle", // Drizzle: Moderate
  55: "cloud-drizzle", // Drizzle: Dense
  56: "cloud-rain", // Freezing Drizzle: Light
  57: "cloud-rain", // Freezing Drizzle: Dense
  61: "cloud-rain", // Rain: Slight
  63: "cloud-rain", // Rain: Moderate
  65: "cloud-rain", // Rain: Heavy
  66: "cloud-rain", // Freezing Rain: Light
  67: "cloud-rain", // Freezing Rain: Heavy
  71: "cloud-snow", // Snow fall: Slight (not in Feather, fallback)
  73: "cloud-snow", // Snow fall: Moderate (fallback)
  75: "cloud-snow", // Snow fall: Heavy (fallback)
  77: "cloud-snow", // Snow grains (fallback)
  80: "cloud-rain", // Rain showers: Slight
  81: "cloud-rain", // Rain showers: Moderate
  82: "cloud-rain", // Rain showers: Violent
  85: "cloud-snow", // Snow showers: Slight (fallback)
  86: "cloud-snow", // Snow showers: Heavy (fallback)
  95: "cloud-lightning", // Thunderstorm (not in Feather, fallback)
  96: "cloud-lightning", // Thunderstorm with hail (fallback)
  99: "cloud-lightning", // Thunderstorm with hail (fallback)
};
