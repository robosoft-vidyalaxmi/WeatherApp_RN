export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_weather_units: CurrentWeatherUnits;
  current_weather: CurrentWeather;

  hourly_units: HourlyUnits;
  hourly: HourlyData;

  daily_units: DailyUnits;
  daily: DailyData;
}

export interface CurrentWeatherUnits {
  time: string;
  interval: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

export interface HourlyUnits {
  time: string;
  relative_humidity_2m: string;
  visibility: string;
}

export interface HourlyData {
  time: string[];
  relative_humidity_2m: number[];
  visibility: number[];
}

export interface DailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  precipitation_sum: string;
}

export interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
}
