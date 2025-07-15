import { AxiosResponse } from "axios";
import { IHttpRequestBody, makeHttpRequest } from "../apiClient";
import { weatherAxiosInstance } from "../instances/weatherAxiosInstance";
import { weatherEndpoints } from "../models/Weather/weatherEndpoints";
import { WeatherApiResponse } from "../models/Weather/weatherModel";
import { WeatherService } from "../models/Weather/weatherService";

export const WeatherHandler = (): WeatherService => {
  const weatherService: WeatherService = {
    getCurrentWeather: async function (
      latitude: number,
      longitude: number
    ): Promise<AxiosResponse<WeatherApiResponse>> {
      try {
        const url = weatherEndpoints.GET_WEATHER.url;

        const params = {
          latitude: latitude,
          longitude: longitude,
          current_weather: true,
          daily: "temperature_2m_max,temperature_2m_min,precipitation_sum",
          hourly: "relative_humidity_2m,visibility",
          timezone: "auto",
        };

        const requestBody: IHttpRequestBody<null, typeof params> = {
          url,
          method: "get",
          params,
          axiosInstance: weatherAxiosInstance,
        };

        return await makeHttpRequest(requestBody);
      } catch (error) {
        if (!(error instanceof Error)) {
          return Promise.reject(new Error(String(error)));
        }
        return Promise.reject(error);
      }
    },
  };

  return weatherService;
};
