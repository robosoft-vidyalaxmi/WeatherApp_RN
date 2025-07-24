import { useFavoriteLocation } from "@/src/hooks/useFavoriteLocation";
import { SavedLocation } from "@/src/models/weather";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { getLocationName } from "@/src/utils/location";
import { navigateToCityInfo } from "@/src/utils/locationNavigation";
import { getDisplayTemperature } from "@/src/utils/temperature";
import { useTheme } from "@emotion/react";
import React from "react";
import { Pressable } from "react-native";
import FavouriteToggleIcon from "../../atoms/FavouriteToggleIcon";
import WeatherConditionIcon from "../../atoms/WeatherConditionIcon";
import {
  ConditionText,
  InfoRow,
  ItemContainer,
  LocationText,
  RightSection,
  TemperatureAndUnitContainer,
  TemperatureText,
  UnitText,
  WeatherInfo,
} from "./styles";

interface Props {
  data: SavedLocation;
  unit: TemperatureUnit;
}

const LocationItem: React.FC<Props> = ({ data: location, unit }) => {
  const theme = useTheme();
  const { weather } = location;
  const { isFavorite, toggleFavorite } = useFavoriteLocation(location);

  const handleSelect = () => {
    if (!location) return;
    navigateToCityInfo(location);
  };

  return (
    <Pressable onPress={handleSelect}>
      <ItemContainer>
        <InfoRow>
          <LocationText>{getLocationName(location)}</LocationText>

          {weather && (
            <WeatherInfo>
              <WeatherConditionIcon
                icon={weather.icon}
                color={theme.colors.iconColor}
                size={25}
              />
              <TemperatureAndUnitContainer>
                <TemperatureText>
                  {getDisplayTemperature(weather.temperature, unit)}
                </TemperatureText>
                <UnitText>°{unit}</UnitText>
              </TemperatureAndUnitContainer>
              <ConditionText>{weather.condition}</ConditionText>
            </WeatherInfo>
          )}

          <RightSection>
            <FavouriteToggleIcon
              isFavourite={isFavorite}
              onToggle={() => toggleFavorite()}
              size={18}
            />
          </RightSection>
        </InfoRow>
      </ItemContainer>
    </Pressable>
  );
};

export default LocationItem;
