import { LocationHandler } from "@/src/network/apiHandlers/locationHandler";
import { LocationResponse } from "@/src/network/models/Location/locationModel";
import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable } from "react-native";
import {
  DropdownContainer,
  DropdownItem,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styles";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LocationResponse[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const locationService = LocationHandler();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length >= 2) {
        locationService
          .getSearchedCities(query, 5)
          .then((res) => {
            setResults(res.data);
            setShowDropdown(true);
          })
          .catch(console.error);
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleCitySelect = (city: LocationResponse) => {
    setQuery("");
    setShowDropdown(false);

    router.push({
      pathname: "/(modal)/CityInfo",
      params: {
        lat: city.lat,
        lon: city.lon,
        name: city.display_name,
      },
    });
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder={t("searchPlaceholder")}
        placeholderTextColor={theme.colors.placeholderTextColor}
        value={query}
        onChangeText={setQuery}
        onFocus={() => {
          if (results.length) setShowDropdown(true);
        }}
      />
      <SearchIcon as={Feather} name="search" size={18} />
      {showDropdown && results.length > 0 && (
        <DropdownContainer>
          <FlatList
            data={results}
            keyExtractor={(item) => item.place_id.toString()}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleCitySelect(item)}>
                <DropdownItem>{item.display_name}</DropdownItem>
              </Pressable>
            )}
          />
        </DropdownContainer>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
