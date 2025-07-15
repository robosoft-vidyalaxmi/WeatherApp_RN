import axios from "axios";
import { setupInterceptors } from "../interceptors";

export const locationAxiosInstance = setupInterceptors(
  axios.create({
    baseURL: process.env.EXPO_PUBLIC_LOCATION_API_URL,
    timeout: 60000,
  })
);
