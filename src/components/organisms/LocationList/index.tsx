import { SavedLocation } from "@/src/models/weather";
import { clearAllFavorites } from "@/src/store/redux/slices/favorite-slice";
import { useAppDispatch } from "@/src/store/redux/store";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable } from "react-native";
import LocationItem from "../../molecules/LocationItem";
import { HeaderView, Text } from "./styles";

interface Props {
  favorites: SavedLocation[];
  onSelect: (location: SavedLocation) => void;
  unit: TemperatureUnit;
  currentLocation?: { latitude: number; longitude: number };
  locationCountText: string;
  clearAllText: string;
}

const LocationList: React.FC<Props> = ({
  favorites,
  onSelect,
  unit,
  currentLocation,
  locationCountText,
  clearAllText,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <>
      <HeaderView>
        {favorites.length > 0 && (
          <>
            <Text>{locationCountText}</Text>
            <Pressable onPress={() => dispatch(clearAllFavorites())}>
              <Text>{clearAllText}</Text>
            </Pressable>
          </>
        )}
      </HeaderView>
      <FlatList
        data={favorites}
        keyExtractor={(item) => `${item.latitude}-${item.longitude}`}
        renderItem={({ item }) => (
          <LocationItem
            data={item}
            onSelect={onSelect}
            unit={unit}
            currentLocation={currentLocation}
          />
        )}
      />
    </>
  );
};

export default LocationList;
