import { SavedLocation } from "@/src/models/weather";
import { removeFavorite } from "@/src/store/redux/slices/favorite-slice";
import { useAppDispatch } from "@/src/store/redux/store";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { getLocationName } from "@/src/utils/location";
import { getDisplayTemperature } from "@/src/utils/temperature";
import { useTheme } from "@emotion/react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
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
}

const LocationItem: React.FC<Props> = ({ data: location, unit }) => {
  const theme = useTheme();
  const { weather } = location;
  const dispatch = useAppDispatch();

  const handleSelect = (location: SavedLocation) => {
    if (!location) return;
    router.push({
      pathname: "/(modal)/CityInfo",
      params: {
        latitude: location.latitude.toString(),
        longitude: location.longitude.toString(),
        city: location.city ?? "",
        region: location.region ?? "",
        country: location.country ?? "",
      },
    });
  };

  return (
    <Pressable onPress={() => handleSelect(location)}>
      <ItemContainer>
        <InfoRow>
          <LocationText>{getLocationName(location)}</LocationText>

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
