import { STRINGS } from "@/src/constants/strings";
import SearchBar from "../../molecules/SearchBar";
import { HeaderView, LogoText } from "./styles";
const HomePageHeader: React.FC = () => {
  return (
    <HeaderView>
      <LogoText>{STRINGS.appTitle.toUpperCase()}</LogoText>
      <SearchBar />
    </HeaderView>
  );
};

export default HomePageHeader;
