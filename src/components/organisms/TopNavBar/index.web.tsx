import { useIsActiveTab } from "@/src/hooks/useActiveTab";
import { router, usePathname } from "expo-router";
import { useTranslation } from "react-i18next";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import TabItem from "../../molecules/TabItem";
import { ContainerView, DateTimeView, TabsView } from "./styles";

const TopNavBar: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const navItems: { name: string; href: StringRoute }[] = [
    { name: t("tabs.home"), href: "/" },
    { name: t("tabs.favourite"), href: "/favorite" },
    { name: t("tabs.recentSearch"), href: "/recentSearch" },
  ];

  const handleTabPress = ({
    name,
    href,
  }: {
    name: string;
    href: StringRoute;
  }) => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  type StringRoute = Extract<Parameters<typeof router.push>[0], string>;
  const renderTabs = () => (
    <TabsView>
      {navItems.map((item, index) => (
        <TabItem
          key={index}
          label={item.name}
          isActive={useIsActiveTab(item.href)}
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
