import { useIsActiveTab } from "@/src/hooks/useActiveTab";
import { router, usePathname } from "expo-router";
import { useTranslation } from "react-i18next";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import TabItem from "../../molecules/TabItem";
import { ContainerView, DateTimeView, TabsView } from "./styles";

const TopNavBar: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  type StringRoute = Extract<Parameters<typeof router.push>[0], string>;
  const tabs: { name: string; href: StringRoute }[] = [
    { name: t("tabs.home"), href: "/" as StringRoute },
    { name: t("tabs.favourite"), href: "/favorite" as StringRoute },
    { name: t("tabs.recentSearch"), href: "/recentSearch" as StringRoute },
  ];
  const handleTabPress = ({ href }: { href: StringRoute }) => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <ContainerView>
      <TabsView>
        {tabs.map((item, index) => {
          const isActive = useIsActiveTab(item.href);
          return (
            <TabItem
              key={index}
              label={item.name}
              isActive={isActive}
              onPress={() => handleTabPress(item)}
            />
          );
        })}
      </TabsView>
      <DateTimeView>
        <DateTimeDisplay />
      </DateTimeView>
    </ContainerView>
  );
};

export default TopNavBar;
