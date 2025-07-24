import LocationList from "@/src/components/organisms/LocationList";
import { LocationData } from "@/src/types/location";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { CenteredView, Text } from "./styles";

interface Props {
  favorites: LocationData[];
  unit: TemperatureUnit;
  onSelect: (location: LocationData) => void;
  currentLocation?: { latitude: number; longitude: number };
  locationCountText: string;
  clearAllText: string;
}

const LocationListTemplate: React.FC<Props> = ({
  favorites,
  unit,
  onSelect,
  currentLocation,
  locationCountText,
  clearAllText,
}) => {
  if (favorites.length === 0) {
    return (
      <CenteredView>
        <Text>No favorites yet</Text>
      </CenteredView>
    );
  }

  return (
    <LocationList
      favorites={favorites}
      onSelect={onSelect}
      unit={unit}
      currentLocation={currentLocation}
      locationCountText={locationCountText}
      clearAllText={clearAllText}
    />
  );
};

export default LocationListTemplate;
