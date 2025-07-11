import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import TopNavBar from "@/src/components/organisms/TopNavBar";
import { useTheme } from "@emotion/react";
import LocationAndWeatherInfo from "../../organisms/LocationAndWeatherInfo";
import { LinearGradientView } from "./styles";

const HomeScreenPage: React.FC = () => {
  const theme = useTheme();
  const backgroundGradientStartColor =
    theme.colors.backgroundGradientStartColor;
  const backgroundGradientEndColor = theme.colors.backgroundGradientEndColor;

  return (
    <LinearGradientView
      colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <HomePageHeader />
      <TopNavBar />

      <LocationAndWeatherInfo />
    </LinearGradientView>
  );
};

export default HomeScreenPage;
