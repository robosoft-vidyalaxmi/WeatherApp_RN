import { useIsWeb } from "@/src/hooks/useIsWeb";
import { WeatherData } from "@/src/models/weather";
import { LocationData } from "@/src/types/location";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { useTheme } from "@emotion/react";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import LocationSection from "../../organisms/LocationSection";
import TemperatureSection from "../../organisms/TemperatureSection";
import WeatherDetailsSection from "../../organisms/WeatherDetailsSection";
import {
  ActivityIndicator,
  DateTimeView,
  ErrorContainerView,
  ErrorText,
  View,
} from "./styles";

interface Props {
  location?: LocationData | null;
  weather?: WeatherData | null;
  loading: boolean;
  error?: string | null;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  temperatureUnit: TemperatureUnit;
}

const HomeTemplate: React.FC<Props> = ({
  location,
  weather,
  loading,
  error,
  isFavorite,
  onToggleFavorite,
  temperatureUnit,
}) => {
  const theme = useTheme();
  const isWeb = useIsWeb();

  return (
    <View>
      {loading && !error && (
        <ActivityIndicator size="large" color={theme.colors.primary1} />
      )}
      {!loading && error && (
        <ErrorContainerView>
          <ErrorText>{error}</ErrorText>
        </ErrorContainerView>
      )}
      {location && weather && (
        <>
          {!isWeb && (
            <DateTimeView>
              <DateTimeDisplay />
            </DateTimeView>
          )}
          <LocationSection
            location={location}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <TemperatureSection weather={weather} unit={temperatureUnit} />
          <WeatherDetailsSection weather={weather} unit={temperatureUnit} />
        </>
      )}
    </View>
  );
};

export default HomeTemplate;
