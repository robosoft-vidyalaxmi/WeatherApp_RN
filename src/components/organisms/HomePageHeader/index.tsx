import { useIsWeb } from "@/src/hooks/useIsWeb";
import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";
import SearchBar from "../../molecules/SearchBar";
import { HeaderView, LogoText } from "./styles";

const HomePageHeader: React.FC = () => {
  const { t } = useTranslation();
  const isWeb = useIsWeb();
  const theme = useTheme();

  const handleSearchPress = () => {
    console.log("Search icon pressed");
  };

  return (
    <HeaderView>
      <LogoText>{t("appTitle").toUpperCase()}</LogoText>
      {isWeb ? (
        <SearchBar />
      ) : (
        <Pressable onPress={handleSearchPress} hitSlop={10}>
          <Feather name="search" size={24} color={theme.colors.text} />
        </Pressable>
      )}
    </HeaderView>
  );
};

export default HomePageHeader;
