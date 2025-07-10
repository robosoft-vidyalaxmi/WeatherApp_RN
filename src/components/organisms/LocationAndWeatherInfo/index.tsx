import { useCurrentLocation } from "@/src/hooks/useCurrentLocation";
import { useWeather } from "@/src/hooks/useWeather";
import React from "react";
import { View } from "react-native";
import LocationInfo from "../../molecules/LocationInfo";
import WeatherInfo from "../WeatherInfo";
import WeatherInfoFooter from "../WeatherInfoFooter";

const LocationAndWeatherInfo: React.FC = () => {
  const {
    location,
    loading: locationLoading,
    error: locationError,
  } = useCurrentLocation();

  const {
    weather,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather(location?.latitude, location?.longitude);

  const renderLocationAndWeatherData = (
    locationName: string,
    temperature: string,
    description: string
  ) => (
    <>
      <LocationInfo
        locationName={locationName}
        isFavourite={false}
        onToggleFavourite={() => console.log("Toggled")}
      />
      <WeatherInfo temperature={temperature} description={description} />
      <WeatherInfoFooter />
    </>
  );

  return (
    <View style={{ flex: 1 }}>
      {location &&
        weather &&
        renderLocationAndWeatherData(
          `${location?.city ?? ""}, ${location?.region ?? ""}`,
          `${weather?.temperature}`,
          `${weather?.description}`
        )}
    </View>
  );
};

export default LocationAndWeatherInfo;
