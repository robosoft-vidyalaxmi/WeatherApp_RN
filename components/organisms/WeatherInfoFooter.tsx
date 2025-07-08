import WeatherInfoItem from "@/components/molecules/WeatherInfoItem";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function WeatherInfoFooter() {
  return (
    <View style={styles.footerRow}>
      <WeatherInfoItem icon="thermometer" label="Min - Max" value="75° - 90°" />
      <WeatherInfoItem icon="cloud-rain" label="Precipitation" value="0%" />
      <WeatherInfoItem icon="droplet" label="Humidity" value="47%" />
      <WeatherInfoItem icon="wind" label="Wind" value="4 mph" />
      <WeatherInfoItem icon="eye" label="Visibility" value="12 mph" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
});
