import { STRINGS } from "@/constants/strings";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../molecules/SearchBar";

export default function Header() {
  const textColor = useThemeColor({}, "text");

  return (
    <View style={styles.header}>
      <Text style={[styles.logo, { color: textColor }]}>
        {STRINGS.appTitle.toUpperCase()}
      </Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 12,
    alignSelf: "center",
  },
});
