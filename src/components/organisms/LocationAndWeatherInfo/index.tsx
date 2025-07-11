import { useCurrentLocation } from "@/src/hooks/useCurrentLocation";
import { useWeather } from "@/src/hooks/useWeather";
import { LocationData } from "@/src/types/location";
import { WeatherData } from "@/src/types/weather";
import LocationInfo from "../../molecules/LocationInfo";
import TemperatureDetails from "../TemperatureDetails";
import WeatherDetails from "../WeatherDetails";
import { View } from "./styles";

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

  const renderLocationInfo = (location: LocationData) => (
    <LocationInfo
      locationName={`${location?.city ?? ""}, ${location?.region ?? ""}`}
      isFavourite={false}
      onToggleFavourite={() => console.log("Toggled")}
    />
  );

  const renderTemperatureDetails = (weatherData: WeatherData) => (
    <TemperatureDetails
      iconName={weatherData.icon}
      temperature={`${weatherData?.temperature}°`}
      description={weatherData.description}
    />
  );

  const renderWeatherDetails = (weatherData: WeatherData) => (
    <WeatherDetails
      minMaxTemperature={`${Math.floor(weatherData.tempMin) ?? ""}° - ${
        Math.floor(weatherData.tempMax) ?? ""
      }°`}
      percipitation={`${Math.floor(weatherData.precipitation) ?? ""}%`}
      humidity={`${weatherData.humidity.toString() ?? ""}%`}
      wind={`${Math.floor(weatherData.windspeed) ?? ""} km/h`}
      visibility={`${weatherData.visibility.toString() ?? ""} m`}
    />
  );

  return (
    <View>
      {location && weather && (
        <>
          {renderLocationInfo(location)}
          {renderTemperatureDetails(weather)}
          {renderWeatherDetails(weather)}
        </>
      )}
    </View>
  );
};

export default LocationAndWeatherInfo;
