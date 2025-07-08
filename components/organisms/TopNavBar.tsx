import { DateTimeDisplay } from "@/components/molecules/DateTimeDisplay";
import { TabItem } from "@/components/molecules/TabItem";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const navItems = ["Home", "Favourite", "Recent Search"];

export default function TopNavBar() {
  const dividerColor = useThemeColor({}, "dividerColor");

  const [activeTab, setActiveTab] = useState("Home");

  return (
    <View style={[styles.container, { borderBottomColor: dividerColor }]}>
      <View style={styles.left}>
        {navItems.map((item, index) => (
          <TabItem
            key={index}
            label={item}
            isActive={activeTab === item}
            onPress={() => setActiveTab(item)}
          />
        ))}
      </View>
      <View style={styles.right}>
        <DateTimeDisplay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 25,
  },
  left: {
    flexDirection: "row",
    gap: 24,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 4,
  },
});
