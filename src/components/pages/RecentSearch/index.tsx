import HomePageHeader from "@/src/components/organisms/HomePageHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import LinearGradientBaseView from "../../layouts/LinearGradientBaseView";

const RecentSearchPage: React.FC = () => {
  const isWeb = useIsWeb();

  const Content = <>{!isWeb && <HomePageHeader />}</>;

  return <LinearGradientBaseView>{Content}</LinearGradientBaseView>;
};

export default RecentSearchPage;
