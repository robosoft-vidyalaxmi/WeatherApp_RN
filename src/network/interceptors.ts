import { AxiosInstance } from "axios";

export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    (config) => {
      // Add common headers here if needed
      // config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      if (!(error instanceof Error)) {
        return Promise.reject(new Error(String(error)));
      }
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;

      if (response?.status === 401) {
        // Handle 401 logic here
      }

      if (error.response?.config.url === "") {
        // Show toast or log error
      }

      if (!(error instanceof Error)) {
        return Promise.reject(new Error(String(error)));
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
