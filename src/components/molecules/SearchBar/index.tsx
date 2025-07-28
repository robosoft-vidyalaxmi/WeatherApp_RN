import { useSearchLocation } from "@/src/hooks/useSearchLocation";
import { addRecentSearch } from "@/src/store/redux/slices/recentSearch-slice";
import { useAppDispatch } from "@/src/store/redux/store";
import { LocationData } from "@/src/types/location";
import { getLocationName } from "@/src/utils/location";
import { navigateToCityInfo } from "@/src/utils/locationNavigation";
import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, FlatList, Pressable } from "react-native";
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
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useAppDispatch();

  const { results, loading } = useSearchLocation(query);

  const handleCitySelect = (location: LocationData) => {
    setQuery("");
    setShowDropdown(false);
    dispatch(addRecentSearch(location));
    navigateToCityInfo(location);
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder={t("searchPlaceholder")}
        placeholderTextColor={theme.colors.placeholderTextColor}
        value={query}
        onChangeText={setQuery}
        onFocus={() => {
          setShowDropdown(true);
        }}
      />
      <SearchIcon as={Feather} name="search" size={18} />

      {showDropdown && results.length > 0 && (
        <DropdownContainer>
          {loading ? (
            <ActivityIndicator size="large" color={theme.colors.activeText1} />
          ) : (
            <FlatList
              data={results}
              keyExtractor={(location) =>
                `${location.latitude}-${location.longitude}-${location.city}`
              }
              renderItem={({ item }) => (
                <Pressable onPress={() => handleCitySelect(item)}>
                  <DropdownItem>{getLocationName(item)}</DropdownItem>
                </Pressable>
              )}
            />
          )}
        </DropdownContainer>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
