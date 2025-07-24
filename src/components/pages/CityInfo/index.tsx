import { useFavoriteLocation } from "@/src/hooks/useFavoriteLocation";
import { useWeather } from "@/src/hooks/useWeather";
import { useAppSelector } from "@/src/store/redux/store";
import { LocationData } from "@/src/types/location";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";
import LocationAndWeatherDataTemplate from "../../templates/LocationAndWeatherDataTemplate";

interface CityInfoPage {
  location: LocationData;
}

const CityInfoPage: React.FC<CityInfoPage> = ({ location }) => {
  const { weather, loading, error } = useWeather(
    location.latitude,
    location.longitude
  );
  const { isFavorite, toggleFavorite } = useFavoriteLocation(location);
  const unit = useAppSelector((state) => state.unit.temperatureUnit);

  const Content = (
    <>
      <LocationAndWeatherDataTemplate
        location={location}
        weather={weather}
        loading={loading}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={() => toggleFavorite(weather ?? undefined)}
        temperatureUnit={unit}
      />
    </>
  );

  return (
    <LinearGradientBaseView canAddHeaderOffset={false}>
      {Content}
    </LinearGradientBaseView>
  );
};

export default CityInfoPage;
