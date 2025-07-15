import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { SearchIcon, SearchInput, SearchWrapper } from "./styles";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <SearchWrapper>
      <SearchInput
        placeholder={t("searchPlaceholder")}
        placeholderTextColor={theme.colors.placeholderTextColor}
      />
      <SearchIcon as={Feather} name="search" size={18} />
    </SearchWrapper>
  );
};

export default SearchBar;
