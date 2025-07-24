import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { clearAllFavorites } from "@/src/store/redux/slices/favorite-slice";
import { useAppDispatch, useAppSelector } from "@/src/store/redux/store";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";
import ConfirmModal from "../../molecules/ConfirmModal";
import EmptyState from "../../templates/EmptyState";
import LocationListTemplate from "../../templates/LocationListTemplate";

const FavoritesScreenPage: React.FC = () => {
  const isWeb = useIsWeb();
  const favorites = useAppSelector((state) => state.favorites.locations);
  const unit = useAppSelector((state) => state.unit.temperatureUnit);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const Content = <>{!isWeb && <HomePageHeader />}</>;

  const handleRemoveAll = () => {
    setShowModal(true);
  };

  const confirmClear = () => {
    dispatch(clearAllFavorites());
    setShowModal(false);
  };

  const cancelClear = () => {
    setShowModal(false);
  };

  return (
    <LinearGradientBaseView canAddHeaderOffset={true}>
      {Content}
      <LocationListTemplate
        locations={favorites}
        unit={unit}
        summaryText={t("favoritesCount", { count: favorites.length })}
        clearAllText={t("favorites.removeAll")}
        onClearAll={handleRemoveAll}
        emptyComponent={
          <EmptyState emptyStateText={t("favorites.emptyText")} />
        }
      />
      <ConfirmModal
        visible={showModal}
        message={t("favorites.removeAllConfirmation")}
        onCancel={cancelClear}
        onConfirm={confirmClear}
      />
    </LinearGradientBaseView>
  );
};

export default FavoritesScreenPage;
