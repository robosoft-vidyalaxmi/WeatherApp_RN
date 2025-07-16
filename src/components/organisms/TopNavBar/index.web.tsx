import { useIsWeb } from "@/src/hooks/useIsWeb";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import TabItem from "../../molecules/TabItem";
import { ContainerView, DateTimeView, TabsView } from "./styles";

const TopNavBar: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t("tabs.home"));

  const navItems: { name: string; href: RoutePath }[] = [
    { name: t("tabs.home"), href: "/(home)" },
    { name: t("tabs.favourite"), href: "/(home)/favorite" },
    { name: t("tabs.recentSearch"), href: "/(home)/recentSearch" },
  ];

  const handleTabPress = ({
    name,
    href,
  }: {
    name: string;
    href: RoutePath;
  }) => {
    console.log("Tab pressed:", { name, href });
    setActiveTab(name);
    router.push(href);
  };
  type RoutePath = Parameters<typeof router.push>[0];

  const renderTabs = () => (
    <TabsView>
      {navItems.map((item, index) => (
        <TabItem
          key={index}
          label={item.name}
          isActive={activeTab === item.name}
          onPress={() => handleTabPress(item)}
        />
      ))}
    </TabsView>
  );

  const renderDateTime = () => (
    <DateTimeView>
      <DateTimeDisplay />
    </DateTimeView>
  );

  const isWeb = useIsWeb();
  return (
    <>
      {
        <ContainerView>
          {renderTabs()}
          {renderDateTime()}
        </ContainerView>
      }
    </>
  );
};

export default TopNavBar;
