import LocationList from "@/src/components/organisms/LocationList";
import { SavedLocation } from "@/src/models/weather";
import { TemperatureUnit } from "@/src/types/temperatureUnit";

interface Props {
  locations: SavedLocation[];
  unit: TemperatureUnit;
  summaryText: string;
  clearAllText: string;
  onClearAll: () => void;
  emptyComponent?: React.ReactNode;
}

const LocationListTemplate: React.FC<Props> = ({
  locations,
  unit,
  summaryText,
  clearAllText,
  onClearAll,
  emptyComponent,
}) => {
  if (locations.length === 0 && emptyComponent) {
    return emptyComponent;
  }

  return (
    <LocationList
      locations={locations}
      unit={unit}
      summaryText={summaryText}
      clearAllText={clearAllText}
      onClearAll={onClearAll}
    />
  );
};

export default LocationListTemplate;
