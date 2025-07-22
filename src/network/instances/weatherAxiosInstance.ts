import axios from "axios";
import { setupInterceptors } from "../interceptors";

export const weatherAxiosInstance = setupInterceptors(
  axios.create({
    baseURL: process.env.EXPO_PUBLIC_WEATHER_API_URL,
    timeout: 60000,
  })
);