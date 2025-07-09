import LocationInfo from "@/src/components/molecules/LocationInfo";
import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import TopNavBar from "@/src/components/organisms/TopNavBar";
import WeatherInfo from "@/src/components/organisms/WeatherInfo";
import { STRINGS } from "@/src/constants/strings";
import { useTheme } from "@emotion/react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const theme = useTheme();
  const textColor = theme.colors.text;
  const backgroundGradientStartColor =
    theme.colors.backgroundGradientStartColor;
  const backgroundGradientEndColor = theme.colors.backgroundGradientEndColor;

  return (
    <LinearGradient
      colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <HomePageHeader />
      <TopNavBar />

      <LocationInfo
        locationName={STRINGS.location}
        isFavourite={false}
        onToggleFavourite={() => console.log("Toggled")}
      />

      <WeatherInfo />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  favorite: {
    marginTop: 4,
  },
});
