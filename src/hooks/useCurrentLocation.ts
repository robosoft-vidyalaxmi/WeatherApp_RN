import {
    getLocationCoords,
    getLocationName,
} from "@/src/services/locationService";
import { useEffect, useState } from "react";

interface LocationState {
  latitude: number;
  longitude: number;
  city?: string;
  region?: string;
  country?: string;
}

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<LocationState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const coords = await getLocationCoords();
        const place = await getLocationName(coords.latitude, coords.longitude);
        const safe = (value: string | null): string | undefined =>
          value ?? undefined;

        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
          city: safe(place.city),
          region: safe(place.region),
          country: safe(place.country),
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
