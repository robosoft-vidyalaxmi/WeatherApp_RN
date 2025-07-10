import { getWeatherData } from "@/src/services/weatherService";
import { useEffect, useState } from "react";
import { WeatherData } from "../types/weather";

export const useWeather = (
  latitude?: number,
  longitude?: number
) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (latitude != null && longitude != null) {
      const fetchWeather = async () => {
        try {
          const data = await getWeatherData(latitude, longitude);
          setWeather(data);
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

