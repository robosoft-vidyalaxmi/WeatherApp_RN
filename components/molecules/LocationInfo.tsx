import { LocationTitle } from "@/components/atoms/LocationTitle";
import { StyleSheet, View } from "react-native";
import { FavouriteInfo } from "./FavouriteInfo";

type Props = {
  locationName: string;
  isFavourite: boolean;
  onToggleFavourite: () => void;
};

export function LocationInfo({
  locationName,
  isFavourite,
  onToggleFavourite,
}: Props) {
  return (
    <View style={styles.container}>
      <LocationTitle name={locationName} />
      <FavouriteInfo isFavourite={isFavourite} onToggle={onToggleFavourite} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});
