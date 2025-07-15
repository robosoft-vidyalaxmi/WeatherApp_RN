import { Endpoints } from "../common";

const WEATHER_API_VERSION = process.env.EXPO_PUBLIC_WEATHER_API_VERSION ?? "/v1";

export const weatherEndpoints: Endpoints = {

  GET_WEATHER: {
    url: `${WEATHER_API_VERSION}/forecast`,
    method: "get",
  },
};
