import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { useTheme } from "@emotion/react";
import ScreenWithHeaderOffset from "../../layouts/ScreenWithHeaderOffset";
import { LinearGradientView } from "./styles";

const FavoritesScreenPage: React.FC = () => {
  const theme = useTheme();
  const backgroundGradientStartColor =
    theme.colors.backgroundGradientStartColor;
  const backgroundGradientEndColor = theme.colors.backgroundGradientEndColor;
  const isWeb = useIsWeb();

  const Content = <>{!isWeb && <HomePageHeader />}</>;

  return (
    <LinearGradientView
      colors={[backgroundGradientStartColor, backgroundGradientEndColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {isWeb ? (
        <ScreenWithHeaderOffset>{Content}</ScreenWithHeaderOffset>
      ) : (
        Content
      )}
    </LinearGradientView>
  );
};

export default FavoritesScreenPage;
