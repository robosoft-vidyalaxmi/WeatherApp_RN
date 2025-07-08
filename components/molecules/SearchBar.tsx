import { STRINGS } from "@/constants/strings";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  const searchBarBackgroundColor = useThemeColor(
    {},
    "searchBarBackgroundColor"
  ); // Semi-transparent white background
  const searchInputColor = useThemeColor({}, "searchInputColor"); // Color for the search input text
  const placeholderTextColor = useThemeColor({}, "placeholderTextColor"); // Color for the placeholder text
  const iconColor = useThemeColor({}, "iconColor"); // Color for the search icon

  return (
    <View
      style={[
        styles.searchWrapper,
        { backgroundColor: searchBarBackgroundColor },
      ]}
    >
      <TextInput
        style={[styles.searchInput, { color: searchInputColor }]}
        placeholder={STRINGS.searchPlaceholder}
        placeholderTextColor={placeholderTextColor}
      />
      <Feather
        name="search"
        size={18}
        color={iconColor}
        style={styles.searchIcon}
      />
    </View>
  );
}

// <Text style={[styles.text, { color: textColor }]}>{formatDate(time)}</Text>

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    width: "50%",
    minWidth: 300,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    outlineWidth: 0,
    outlineColor: "transparent",
    outlineOffset: 0,
  },
});
