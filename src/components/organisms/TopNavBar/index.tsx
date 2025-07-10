import { useMediaQueryContext } from "@/src/contexts";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import TabItem from "../../molecules/TabItem";
import { ContainerView, DateTimeView, TabsView } from "./styles";

const TopNavBar: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useMediaQueryContext();
  const [activeTab, setActiveTab] = useState(t("home"));

  const navItems = [t("home"), t("favourite"), t("recentSearch")];

  const renderTabs = () => (
    <TabsView>
      {navItems.map((item, index) => (
        <TabItem
          key={index}
          label={item}
          isActive={activeTab === item}
          onPress={() => setActiveTab(item)}
        />
      ))}
    </TabsView>
  );

  const renderDateTime = () => (
    <DateTimeView>
      <DateTimeDisplay />
    </DateTimeView>
  );

  const isWeb = Platform.OS === "web" && !(isMobile || isTablet);
  return (
    <>
      <ContainerView>
        {isWeb ? (
          renderTabs()
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderTabs()}
          </ScrollView>
        )}
        {isWeb && renderDateTime()}
      </ContainerView>
      {!isWeb && renderDateTime()}
    </>
  );
};

export default TopNavBar;
