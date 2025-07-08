import WeatherInfoFooter from "@/components/organisms/WeatherInfoFooter";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useWeather } from "@/hooks/useWeather";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherInfo() {
  const { data } = useWeather();
  const textColor = useThemeColor({}, "text");

  return (
    <View style={styles.container}>
      <Text style={[styles.temp, { color: textColor }]}>
        {data.temperature}°
      </Text>
      <Text style={[styles.condition, { color: textColor }]}>
        {data.condition}
      </Text>
      <WeatherInfoFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  temp: {
    fontSize: 60,
    fontWeight: "bold",
  },
  condition: {
    fontSize: 20,
    marginBottom: 20,
  },
});
