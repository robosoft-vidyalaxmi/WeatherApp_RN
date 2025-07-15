import axios, { AxiosInstance } from "axios";
import { setupInterceptors } from "./interceptors";

import { Method } from "./models/common";

export interface IHttpRequestBody<
  TData = unknown,
  TParams = Record<string, unknown>,
  THeaders = Record<string, string>,
  TAxiosInstance = AxiosInstance,
> {
  url: string;
  method: Method;
  data?: TData;
  params?: TParams;
  headers?: THeaders;
  axiosInstance?: TAxiosInstance;
}

export const defaultAxiosInstance = setupInterceptors(
  axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 60000,
  })
);

/**
 * Api Request Calls
 * @param requestBody
 * @returns
 */
const makeHttpRequest = (requestBody: IHttpRequestBody) => {
    const instance = requestBody.axiosInstance ?? defaultAxiosInstance;

  switch (requestBody.method) {
    case "post":
    case "patch":
    case "put":
      return instance[requestBody.method](
        requestBody.url,
        requestBody.data,
        {
          params: requestBody.params,
          headers: requestBody.headers,
        }
      );
    case "delete":
    case "get":
      return instance[requestBody.method](requestBody.url, {
        params: requestBody.params,
        headers: requestBody.headers,
      });
  }
};

export { makeHttpRequest };
