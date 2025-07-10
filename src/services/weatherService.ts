import { WeatherData } from "../types/weather";

export const getWeatherData = async (lat: number, lon: number): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=relative_humidity_2m,visibility&timezone=auto`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const weather = data.current_weather;
  const weatherDescriptions: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light",
    53: "Drizzle: Moderate",
    55: "Drizzle: Dense",
    56: "Freezing Drizzle: Light",
    57: "Freezing Drizzle: Dense",
    61: "Rain: Slight",
    63: "Rain: Moderate",
    65: "Rain: Heavy",
    66: "Freezing Rain: Light",
    67: "Freezing Rain: Heavy",
    71: "Snow fall: Slight",
    73: "Snow fall: Moderate",
    75: "Snow fall: Heavy",
    77: "Snow grains",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    85: "Snow showers: Slight",
    86: "Snow showers: Heavy",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with hail: Slight",
    99: "Thunderstorm with hail: Heavy",
  };

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
    windspeed: weather.windspeed,
    humidity: hourly.relative_humidity_2m[timeIndex],
    visibility: hourly.visibility[timeIndex],
    tempMin: daily.temperature_2m_min[todayIndex],
    tempMax: daily.temperature_2m_max[todayIndex],
    precipitation: daily.precipitation_sum[todayIndex],
  };
};
