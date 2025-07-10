import LocationInfo from "@/src/components/molecules/LocationInfo";
import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import TopNavBar from "@/src/components/organisms/TopNavBar";
import WeatherInfo from "@/src/components/organisms/WeatherInfo";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import WeatherInfoFooter from "../../organisms/WeatherInfoFooter";
import { LinearGradientView } from "./styles";

const HomeScreenPage: React.FC = () => {
  const { t } = useTranslation();
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

      <LocationInfo
        locationName={t("location")}
        isFavourite={false}
        onToggleFavourite={() => console.log("Toggled")}
      />

      <WeatherInfo />
      <WeatherInfoFooter />
    </LinearGradientView>
  );
};

export default HomeScreenPage;
