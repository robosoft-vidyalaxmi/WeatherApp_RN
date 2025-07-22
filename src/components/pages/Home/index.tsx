import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { useLocationAndWeatherInfo } from "@/src/hooks/useLocationAndWeather";
import { useAppSelector } from "@/src/store/redux/store";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";
import HomeTemplate from "../../templates/HomeTemplate";

const HomeScreenPage: React.FC = () => {
  const isWeb = useIsWeb();
  const { location, weather, isFavorite, toggleFavorite, loading, error } =
    useLocationAndWeatherInfo();

  const unit = useAppSelector((state) => state.unit.temperatureUnit);

  const Content = (
    <>
      {!isWeb && <HomePageHeader />}
      <HomeTemplate
        location={location}
        weather={weather}
        loading={loading}
        error={error}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
        temperatureUnit={unit}
      />
    </>
  );

  return (
    <LinearGradientBaseView canAddHeaderOffset={true}>
      {Content}
    </LinearGradientBaseView>
  );
};

export default HomeScreenPage;
