import { AxiosResponse } from "axios";
import { LocationResponse } from "./locationModel";

export interface LocationService {
    /**
     * Fetches the current location data for the given latitude and longitude.
     * @param latitude - The latitude of the location.
     * @param longitude - The longitude of the location.
     * @returns A promise that resolves to a LocationResponse containing the current location data.
     */
  getLocationName(latitude: number,
      longitude: number): Promise<AxiosResponse<LocationResponse>>;
}
