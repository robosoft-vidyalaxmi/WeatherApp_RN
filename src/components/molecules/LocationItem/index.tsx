import { SavedLocation } from "@/src/models/weather";
import { removeFavorite } from "@/src/store/redux/slices/favorite-slice";
import { useAppDispatch } from "@/src/store/redux/store";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { getLocationName } from "@/src/utils/location";
import { getDisplayTemperature } from "@/src/utils/temperature";
import { useTheme } from "@emotion/react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
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
  currentLocation?: { latitude: number; longitude: number };
  onSelect: (location: SavedLocation) => void;
}

const LocationItem: React.FC<Props> = ({
  data: location,
  unit,
  currentLocation,
  onSelect,
}) => {
  const theme = useTheme();
  const { weather, latitude, longitude } = location;
  const isCurrentLocation =
    currentLocation &&
    currentLocation.latitude === latitude &&
    currentLocation.longitude === longitude;
  const dispatch = useAppDispatch();

  return (
    <Pressable onPress={() => onSelect(location)}>
      <ItemContainer>
        <InfoRow>
          <LocationText isCurrentLocation={isCurrentLocation}>
            {getLocationName(location)}
          </LocationText>

          {weather && (
            <WeatherInfo>
              <Feather
                name={weather.icon}
                size={25}
                color={theme.colors.iconColor}
              />
              <TemperatureAndUnitContainer>
                <TemperatureText>
                  {getDisplayTemperature(weather.temperature, unit)}
                </TemperatureText>
                <UnitText>°{unit}</UnitText>
              </TemperatureAndUnitContainer>
              {weather && <ConditionText>{weather.condition}</ConditionText>}
            </WeatherInfo>
          )}

          <RightSection>
            <Pressable onPress={() => dispatch(removeFavorite(location))}>
              <FontAwesome
                name="heart"
                size={18}
                color={theme.colors.activeText1}
              />
            </Pressable>
          </RightSection>
        </InfoRow>
      </ItemContainer>
    </Pressable>
  );
};

export default LocationItem;
