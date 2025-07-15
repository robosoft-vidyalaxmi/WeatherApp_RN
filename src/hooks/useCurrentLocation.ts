import {
  getLocationCoords
} from "@/src/services/locationService";
import { useEffect, useState } from "react";
import { LocationHandler } from "../network/apiHandlers/locationHandler";
import { LocationData } from "../types/location";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const locationService = LocationHandler();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const coords = await getLocationCoords();
        console.log("Coordinates:", coords);
        const data = await locationService.getLocationName(coords.latitude, coords.longitude);
        const place = data.data.address;
        console.log("Location data:", place);
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
          city: place.city ?? place.town ?? place.village ?? "",
          region: place.state ?? "",
          country: place.country ?? "",
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, error, loading };
};
