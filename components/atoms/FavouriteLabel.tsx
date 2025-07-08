import { STRINGS } from "@/constants/strings";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text } from "react-native";

type Props = {
  isFavourite: boolean;
};

export function FavouriteLabel({ isFavourite }: Props) {
  const textColor = useThemeColor({}, "text");
  const activeTextColor = useThemeColor({}, "activeText");

  return (
    <Text
      style={[
        styles.text,
        { color: isFavourite ? activeTextColor : textColor },
      ]}
    >
      {isFavourite ? STRINGS.addedToFavourite : STRINGS.addToFavourite}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});
