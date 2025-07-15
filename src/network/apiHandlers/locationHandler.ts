import { AxiosResponse } from "axios";
import { IHttpRequestBody, makeHttpRequest } from "../apiClient";
import { locationAxiosInstance } from "../instances/locationAxiosInstance";
import { locationEndpoint } from "../models/Location/locationEndpoints";
import { LocationResponse } from "../models/Location/locationModel";
import { LocationService } from "../models/Location/locationService";

export const LocationHandler = (): LocationService => {
  const locationService: LocationService = {
    getLocationName: async function (
      latitude: number,
      longitude: number
    ): Promise<AxiosResponse<LocationResponse>> {
      try {
        const url = locationEndpoint.GET_LOCATION_NAME.url;
        const params = {
          lat: latitude,
          lon: longitude,
          format: "json",
        };

        const requestBody: IHttpRequestBody<undefined, typeof params> = {
          url,
          method: "get",
          params,
          axiosInstance: locationAxiosInstance,
        };

        const data = await makeHttpRequest(requestBody);
        return data;
      } catch (error) {
        if (!(error instanceof Error)) {
          return Promise.reject(new Error(String(error)));
        }
        return Promise.reject(error);
      }
    },
  };

  return locationService;
};
