import { LocationHandler } from "@/src/network/apiHandlers/locationHandler";
import { LocationData } from "@/src/types/location";
import { mapToLocationData } from "@/src/utils/location";
import { useEffect, useState } from "react";

export const useSearchLocation = (query: string, debounceDelay = 400) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [results, setResults] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(false);
  const locationService = LocationHandler();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [query, debounceDelay]);

  useEffect(() => {
    const fetch = async () => {
      if (debouncedQuery.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await locationService.getSearchedCities(
          debouncedQuery,
          5
        );
        const locations: LocationData[] = response.data
          .map(mapToLocationData)
          .filter((item): item is LocationData => item !== null);
        setResults(locations);
      } catch (err) {
        console.error(err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [debouncedQuery]);

  return { results, loading };
};
