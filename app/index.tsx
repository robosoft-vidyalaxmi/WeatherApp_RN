import { LocationInfo } from "@/components/molecules/LocationInfo";
import Header from "@/components/organisms/Header";
import TopNavBar from "@/components/organisms/TopNavBar";
import WeatherInfo from "@/components/organisms/WeatherInfo";
import { STRINGS } from "@/constants/strings";
import { useThemeColor } from "@/hooks/useThemeColor";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundGradientStartColor = useThemeColor(
    {},
    "backgroundGradientStartColor"
  );
  const backgroundGradientEndColor = useThemeColor(
    {},
    "backgroundGradientEndColor"
  );

  return (
    <LinearGradient
      colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Header />
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
