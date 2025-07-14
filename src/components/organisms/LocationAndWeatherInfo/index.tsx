import { useCurrentLocation } from "@/src/hooks/useCurrentLocation";
import { useWeather } from "@/src/hooks/useWeather";
import { setTemperatureUnit } from "@/src/store/redux/slices/unit-slice";
import { useAppDispatch, useAppSelector } from "@/src/store/redux/store";
import { LocationData } from "@/src/types/location";
import { WeatherData } from "@/src/types/weather";
import { getDisplayTemperature } from "@/src/utils/temperature";
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

  const unit = useAppSelector((state) => state.unit.temperatureUnit);

  const dispatch = useAppDispatch();

  const toggleUnit = () => {
    dispatch(setTemperatureUnit(unit === "C" ? "F" : "C"));
  };

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
      temperature={weatherData.temperature}
      description={weatherData.description}
      unit={unit}
      onToggle={toggleUnit}
    />
  );

  const renderWeatherDetails = (weatherData: WeatherData) => (
    <WeatherDetails
      minMaxTemperature={`${getDisplayTemperature(
        weatherData.temperature,
        unit
      )}° - ${getDisplayTemperature(weatherData.tempMax, unit)}°`}
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
