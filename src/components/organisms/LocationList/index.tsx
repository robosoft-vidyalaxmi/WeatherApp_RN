import { SavedLocation } from "@/src/models/weather";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { FlatList, Pressable } from "react-native";
import LocationItem from "../../molecules/LocationItem";
import { HeaderView, Text } from "./styles";

interface Props {
  locations: SavedLocation[];
  unit: TemperatureUnit;
  currentLocation?: { latitude: number; longitude: number };
  summaryText: string;
  clearAllText: string;
  onClearAll: () => void;
}

const LocationList: React.FC<Props> = ({
  locations,
  unit,
  summaryText,
  clearAllText,
  onClearAll,
}) => {
  return (
    <>
      <HeaderView>
        {locations.length > 0 && (
          <>
            <Text>{summaryText}</Text>
            <Pressable onPress={onClearAll}>
              <Text>{clearAllText}</Text>
            </Pressable>
          </>
        )}
      </HeaderView>
      <FlatList
        data={locations}
        keyExtractor={(item) => `${item.latitude}-${item.longitude}`}
        renderItem={({ item }) => <LocationItem data={item} unit={unit} />}
      />
    </>
  );
};

export default LocationList;
