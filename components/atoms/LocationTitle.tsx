import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text } from "react-native";

type Props = {
  name: string;
};

export function LocationTitle({ name }: Props) {
  const textColor = useThemeColor({}, "text");

  return <Text style={[styles.text, { color: textColor }]}>{name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
});
