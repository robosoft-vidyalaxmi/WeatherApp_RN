import { useLocationAndWeatherInfo } from "@/src/hooks/useLocationAndWeather";
import { useAppSelector } from "@/src/store/redux/store";
import { useTheme } from "@emotion/react";
import LocationSection from "../LocationSection";
import TemperatureSection from "../TemperatureSection";
import WeatherDetailsSection from "../WeatherDetailsSection";
import { ActivityIndicator, View } from "./styles";

const LocationAndWeatherInfo: React.FC = () => {
  const { location, weather, isFavorite, toggleFavorite, loading, error } =
    useLocationAndWeatherInfo();

  const unit = useAppSelector((state) => state.unit.temperatureUnit);
  const theme = useTheme();

  return (
    <View>
      {loading && !error && (
        <ActivityIndicator size="large" color={theme.colors.primary1} />
      )}
      {location && weather && (
        <>
          <LocationSection
            location={location}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
          <TemperatureSection weather={weather} unit={unit} />
          <WeatherDetailsSection weather={weather} unit={unit} />
        </>
      )}
    </View>
  );
};

export default LocationAndWeatherInfo;
