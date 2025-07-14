import { useTranslation } from "react-i18next";
import { Text } from "./styles";

interface FavouriteLabelProps {
  isFavourite: boolean;
}

const FavouriteLabel: React.FC<FavouriteLabelProps> = ({ isFavourite }) => {
  const { t } = useTranslation();

  return (
    <Text isFavourite={isFavourite}>
      {isFavourite ? t("addedToFavourite") : t("addToFavourite")}
    </Text>
  );
};

export default FavouriteLabel;
