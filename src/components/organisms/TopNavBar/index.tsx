import { useState } from "react";
import DateTimeDisplay from "../../molecules/DateTimeDisplay";
import TabItem from "../../molecules/TabItem";
import { ContainerView, LeftView, RightView } from "./styles";

const navItems = ["Home", "Favourite", "Recent Search"];
// const navItems = [STRINGS.home, STRINGS.favourite, STRINGS.recentSearch];

const TopNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

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
