import { LocationData } from "@/src/types/location";
import { getLocationName } from "@/src/utils/location";
import React from "react";
import LocationInfo from "../molecules/LocationInfo";

interface Props {
  location: LocationData;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const LocationSection: React.FC<Props> = ({
  location,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <LocationInfo
      locationName={getLocationName(location)}
      isFavourite={isFavorite}
      onToggleFavourite={onToggleFavorite}
    />
  );
};

export default LocationSection;
