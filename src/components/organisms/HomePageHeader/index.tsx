import { useTranslation } from "react-i18next";
import SearchBar from "../../molecules/SearchBar";
import { HeaderView, LogoText } from "./styles";

const HomePageHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <HeaderView>
      <LogoText>{t("appTitle").toUpperCase()}</LogoText>
      <SearchBar />
    </HeaderView>
  );
};

export default HomePageHeader;
