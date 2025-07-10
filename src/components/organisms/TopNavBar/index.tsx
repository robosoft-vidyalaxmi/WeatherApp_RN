import { useState } from "react";
import { useTranslation } from "react-i18next";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import TabItem from "../../molecules/TabItem";
import { ContainerView, LeftView, RightView } from "./styles";

const TopNavBar: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t("home"));

  const navItems = [t("home"), t("favourite"), t("recentSearch")];
  return (
    <ContainerView>
      <LeftView>
        {navItems.map((item, index) => (
          <TabItem
            key={index}
            label={item}
            isActive={activeTab === item}
            onPress={() => setActiveTab(item)}
          />
        ))}
      </LeftView>
      <RightView>
        <DateTimeDisplay />
      </RightView>
    </ContainerView>
  );
};

export default TopNavBar;
