import HomePageHeader from "../HomePageHeader";
import TopNavBar from "../TopNavBar";
import { HeaderView } from "./styles";

const CustomHeader: React.FC = () => {
  return (
    <HeaderView>
      <HomePageHeader />
      <TopNavBar />
    </HeaderView>
  );
};

export default CustomHeader;
