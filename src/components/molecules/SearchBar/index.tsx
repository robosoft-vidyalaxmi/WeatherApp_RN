import { STRINGS } from "@/src/constants/strings";
import { Feather } from "@expo/vector-icons";
import { SearchIcon, SearchInput, SearchWrapper } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder={STRINGS.searchPlaceholder} />
      <SearchIcon as={Feather} name="search" size={18} />
    </SearchWrapper>
  );
};

export default SearchBar;
