import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";

type Props = {
  isFavourite: boolean;
  onToggle: () => void;
  size?: number;
};

export function FavouriteToggleIcon({
  isFavourite,
  onToggle,
  size = 16,
}: Props) {
  const iconColor = useThemeColor({}, "iconColor");
  const activeTextColor = useThemeColor({}, "activeText");

  return (
    <Pressable onPress={onToggle}>
      <FontAwesome
        name={isFavourite ? "heart" : "heart-o"} // filled or outlined
        size={size}
        color={isFavourite ? activeTextColor : iconColor}
      />
    </Pressable>
  );
}
