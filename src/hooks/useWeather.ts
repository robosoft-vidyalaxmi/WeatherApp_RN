import { useEffect, useState } from "react";
import { weatherDescriptions } from "../constants/weatherDescriptions";
import { weatherIcons } from "../constants/weatherIcons";
import { WeatherData } from "../models/weather";
import { WeatherHandler } from "../network/apiHandlers/weatherHandler";

export const useWeather = (latitude?: number, longitude?: number) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const weatherService = WeatherHandler();

  useEffect(() => {
    if (latitude != null && longitude != null) {
      const fetchWeather = async () => {
        try {
          const data = await weatherService.getCurrentWeather(
            latitude,
            longitude
          );
          const weatherData = data.data;
          const weather = weatherData.current_weather;
          const todayIndex = 0;
          const daily = weatherData.daily;
          const hourly = weatherData.hourly;

          // Get time index closest to now (hourly data)
          const now = new Date().toISOString().slice(0, 13); // e.g., "2025-07-19T14"
          const timeIndex = hourly.time.findIndex((t: string) =>
            t.startsWith(now)
          );

          const description = weatherDescriptions[weather.weathercode];

          const weatherModel: WeatherData = {
            temperature: weather.temperature,
            description,
            icon: weatherIcons[weather.weathercode] ?? "cloud",
            windspeed: weather.windspeed,
            humidity: hourly.relative_humidity_2m[timeIndex],
            visibility: hourly.visibility[timeIndex],
            tempMin: daily.temperature_2m_min[todayIndex],
            tempMax: daily.temperature_2m_max[todayIndex],
            precipitation: daily.precipitation_sum[todayIndex],
          };
          setWeather(weatherModel);
        } catch (err: any) {
          setError(err.message || "Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [latitude, longitude]);

  return {
    weather,
    loading: loading || latitude == null || longitude == null,
    error,
  };
};
