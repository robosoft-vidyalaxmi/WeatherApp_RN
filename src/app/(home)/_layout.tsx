import BottomTabBar from "@/src/components/organisms/BottomTabBar";
import CustomHeader from "@/src/components/organisms/CustomHeader";
import { useIsWeb } from "@/src/hooks/useIsWeb";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack, Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

const AppHomeCustomLayout: React.FC = () => {
  const { t } = useTranslation();
  const tabBar = (props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  };

  return (
    <Tabs
      screenOptions={{
        tabBarPosition: "bottom",
        headerShown: false,
      }}
      tabBar={tabBar}
      initialRouteName="index"
    >
      <Tabs.Screen name="index" options={{ title: t("tabs.home") }} />
      <Tabs.Screen name="favorite" options={{ title: t("tabs.favourite") }} />
      <Tabs.Screen
        name="recentSearch"
        options={{ title: t("tabs.recentSearch") }}
      />
    </Tabs>
  );
};

const WebHomeCustomLayout = () => {
  const options: NativeStackNavigationOptions = {
    header: () => <CustomHeader />,
    headerTitle: "",
    headerTransparent: true,
  };

  return (
    <Stack screenOptions={options}>
      <Stack.Screen name="index" />
      <Stack.Screen name="favorite" />
      <Stack.Screen name="recentSearch" />
    </Stack>
  );
};

const HomeCustomLayout = () => {
  const isWeb = useIsWeb();
  return isWeb ? <WebHomeCustomLayout /> : <AppHomeCustomLayout />;
};

export default HomeCustomLayout;
