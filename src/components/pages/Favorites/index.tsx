import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useCurrentLocation } from "@/src/hooks/useCurrentLocation";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { SavedLocation } from "@/src/models/weather";
import { useAppSelector } from "@/src/store/redux/store";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";
import LocationListTemplate from "../../templates/LocationListTemplate";

const FavoritesScreenPage: React.FC = () => {
  const isWeb = useIsWeb();
  const favorites = useAppSelector((state) => state.favorites.locations);
  const unit = useAppSelector((state) => state.unit.temperatureUnit);
  const { location } = useCurrentLocation();
  const { t } = useTranslation();

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

  const Content = <>{!isWeb && <HomePageHeader />}</>;

  return (
    <LinearGradientBaseView canAddHeaderOffset={true}>
      {Content}
      <LocationListTemplate
        favorites={favorites}
        unit={unit}
        onSelect={handleSelect}
        currentLocation={
          location
            ? { latitude: location.latitude, longitude: location.longitude }
            : undefined
        }
        locationCountText={t("favoritesCount", { count: favorites.length })}
        clearAllText={t("favorites.removeAll")}
      />
    </LinearGradientBaseView>
  );
};

export default FavoritesScreenPage;
