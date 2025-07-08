import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface WeatherInfoItemProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  value: string;
}

export default function WeatherInfoItem({
  icon,
  label,
  value,
}: WeatherInfoItemProps) {
  const iconColor = useThemeColor({}, "iconColor");
  const textColor = useThemeColor({}, "text");

  return (
    <View style={styles.item}>
      <Feather name={icon} size={18} color={iconColor} />
      <View style={styles.dataContainer}>
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        <Text style={[styles.value, { color: textColor }]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "18%",
    alignItems: "center",
    marginBottom: 10,
  },
  dataContainer: {
    marginLeft: 8,
    flexDirection: "column",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
  },
});
