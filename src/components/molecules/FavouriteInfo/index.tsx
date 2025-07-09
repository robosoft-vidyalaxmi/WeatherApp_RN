import FavouriteLabel from "../../atoms/FavouriteLabel";
import FavouriteToggleIcon from "../../atoms/FavouriteToggleIcon";
import { Pressable } from "./styles";

interface FavouriteInfoProps {
  isFavourite: boolean;
  onToggle: () => void;
}

const FavouriteInfo: React.FC<FavouriteInfoProps> = ({
  isFavourite,
  onToggle,
}) => {
  return (
    <Pressable onPress={onToggle}>
      <FavouriteToggleIcon isFavourite={isFavourite} onToggle={onToggle} />
      <FavouriteLabel isFavourite={isFavourite} />
    </Pressable>
  );
};

export default FavouriteInfo;
