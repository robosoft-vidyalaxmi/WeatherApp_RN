import { weatherDescriptions } from "@/src/constants/weatherDescriptions";
import { weatherIcons } from "../constants/weatherIcons";
import { WeatherData } from "../types/weather";

export const getWeatherData = async (lat: number, lon: number): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=relative_humidity_2m,visibility&timezone=auto`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const weather = data.current_weather;

  const todayIndex = 0; // index 0 = today

  const daily = data.daily;
  const hourly = data.hourly;
  // Get time index closest to now (for humidity/visibility)
  const now = new Date().toISOString().slice(0, 13); // 'YYYY-MM-DDTHH'
  const timeIndex = hourly.time.findIndex((t: string) => t.startsWith(now));

  const description = weatherDescriptions[weather.weathercode];
  return {
    temperature: weather.temperature,
    description: description,
    icon: weatherIcons[weather.weathercode] ?? "cloud",
    windspeed: weather.windspeed,
    humidity: hourly.relative_humidity_2m[timeIndex],
    visibility: hourly.visibility[timeIndex],
    tempMin: daily.temperature_2m_min[todayIndex],
    tempMax: daily.temperature_2m_max[todayIndex],
    precipitation: daily.precipitation_sum[todayIndex],
  };
};
