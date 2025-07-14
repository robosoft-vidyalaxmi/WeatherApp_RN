import { useTheme } from "@emotion/react";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface FavouriteToggleIconProps {
  isFavourite: boolean;
  onToggle: () => void;
  size?: number;
}

const FavouriteToggleIcon: React.FC<FavouriteToggleIconProps> = ({
  isFavourite,
  onToggle,
  size,
}) => {
  const theme = useTheme();

  return (
    <Pressable onPress={onToggle}>
      <FontAwesome
        name={isFavourite ? "heart" : "heart-o"} // filled or outlined
        size={size}
        color={isFavourite ? theme.colors.activeText1 : theme.colors.iconColor}
      />
    </Pressable>
  );
};

export default FavouriteToggleIcon;
