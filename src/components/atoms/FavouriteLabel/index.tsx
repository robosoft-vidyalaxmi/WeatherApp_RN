import { STRINGS } from "@/src/constants/strings";
import { useTheme } from "@emotion/react";
import { Text } from "./styles";

interface FavouriteLabelProps {
  isFavourite: boolean;
}

const FavouriteLabel: React.FC<FavouriteLabelProps> = ({ isFavourite }) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: isFavourite ? theme.colors.activeText : theme.colors.text },
      ]}
    >
      {isFavourite ? STRINGS.addedToFavourite : STRINGS.addToFavourite}
    </Text>
  );
};

export default FavouriteLabel;
