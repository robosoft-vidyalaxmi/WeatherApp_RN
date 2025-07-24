import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { clearAllFavorites } from "@/src/store/redux/slices/favorite-slice";
import { useAppDispatch, useAppSelector } from "@/src/store/redux/store";
import { useTranslation } from "react-i18next";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";
import EmptyState from "../../templates/EmptyState";
import LocationListTemplate from "../../templates/LocationListTemplate";

const FavoritesScreenPage: React.FC = () => {
  const isWeb = useIsWeb();
  const favorites = useAppSelector((state) => state.favorites.locations);
  const unit = useAppSelector((state) => state.unit.temperatureUnit);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const Content = <>{!isWeb && <HomePageHeader />}</>;

  return (
    <LinearGradientBaseView canAddHeaderOffset={true}>
      {Content}
      <LocationListTemplate
        locations={favorites}
        unit={unit}
        summaryText={t("favoritesCount", { count: favorites.length })}
        clearAllText={t("favorites.removeAll")}
        onClearAll={() => dispatch(clearAllFavorites())}
        emptyComponent={
          <EmptyState emptyStateText={t("favorites.emptyText")} />
        }
      />
    </LinearGradientBaseView>
  );
};

export default FavoritesScreenPage;
