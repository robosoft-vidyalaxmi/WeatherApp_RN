import { FavouriteLabel } from "@/components/atoms/FavouriteLabel";
import { FavouriteToggleIcon } from "@/components/atoms/FavouriteToggleIcon";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  isFavourite: boolean;
  onToggle: () => void;
};

export function FavouriteInfo({ isFavourite, onToggle }: Props) {
  return (
    <Pressable onPress={onToggle} style={styles.container}>
      <FavouriteToggleIcon isFavourite={isFavourite} onToggle={onToggle} />
      <FavouriteLabel isFavourite={isFavourite} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
