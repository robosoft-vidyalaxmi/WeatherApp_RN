import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Text } from "./styles";

interface FavouriteLabelProps {
  isFavourite: boolean;
}

const FavouriteLabel: React.FC<FavouriteLabelProps> = ({ isFavourite }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Text
      style={[
        { color: isFavourite ? theme.colors.activeText : theme.colors.text },
      ]}
    >
      {isFavourite ? t("addedToFavourite") : t("addToFavourite")}
    </Text>
  );
};

export default FavouriteLabel;
