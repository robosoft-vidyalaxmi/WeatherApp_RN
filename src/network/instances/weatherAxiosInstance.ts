import axios from "axios";
import { setupInterceptors } from "../interceptors";

export const weatherAxiosInstance = setupInterceptors(
  axios.create({
    baseURL: "https://api.open-meteo.com", // no /v1
    timeout: 60000,
  })
);