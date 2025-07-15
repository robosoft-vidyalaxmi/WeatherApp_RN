import { AxiosResponse } from "axios";
import { WeatherApiResponse } from "./weatherModel";

export interface WeatherService {
    /**
     * Fetches the current weather data for the given latitude and longitude.
     * @param latitude - The latitude of the location.
     * @param longitude - The longitude of the location.
     * @returns A promise that resolves to a WeatherModel containing the current weather data.
     */
  getCurrentWeather(latitude: number,
      longitude: number): Promise<AxiosResponse<WeatherApiResponse>>;
}
