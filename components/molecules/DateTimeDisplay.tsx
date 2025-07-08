import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDate, formatTime } from "@/utils/dateTime";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function DateTimeDisplay() {
  const [time, setTime] = useState(new Date());
  const textColor = useThemeColor({}, "text");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>
        {formatDate(time)}
      </Text>
      <Text style={[styles.text, { color: textColor }]}>
        {formatTime(time)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
  },
});
