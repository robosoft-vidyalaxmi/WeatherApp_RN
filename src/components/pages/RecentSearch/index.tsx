import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { clearRecentSearches } from "@/src/store/redux/slices/recentSearch-slice";
import { useAppDispatch, useAppSelector } from "@/src/store/redux/store";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";
import ConfirmModal from "../../molecules/ConfirmModal";
import EmptyState from "../../templates/EmptyState";
import LocationListTemplate from "../../templates/LocationListTemplate";

const RecentSearchPage: React.FC = () => {
  const isWeb = useIsWeb();
  const recentSearches = useAppSelector(
    (state) => state.recentSearch.locations
  );
  const unit = useAppSelector((state) => state.unit.temperatureUnit);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleRemoveAll = () => {
    setShowModal(true);
  };

  const confirmClear = () => {
    dispatch(clearRecentSearches());
    setShowModal(false);
  };

  const cancelClear = () => {
    setShowModal(false);
  };

  const Content = <>{!isWeb && <HomePageHeader />}</>;

  return (
    <LinearGradientBaseView canAddHeaderOffset={true}>
      {Content}
      <LocationListTemplate
        locations={recentSearches}
        unit={unit}
        summaryText={t("recentSearch.title")}
        clearAllText={t("recentSearch.clear")}
        onClearAll={handleRemoveAll}
        emptyComponent={
          <EmptyState emptyStateText={t("recentSearch.emptyText")} />
        }
      />
      <ConfirmModal
        visible={showModal}
        message={t("recentSearch.clearAllConfirmation")}
        onCancel={cancelClear}
        onConfirm={confirmClear}
      />
    </LinearGradientBaseView>
  );
};

export default RecentSearchPage;
