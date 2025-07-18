import { useTheme } from "@emotion/react";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { NavigationRoute, ParamListBase } from "@react-navigation/native";
import { Href, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ContainerView, TabButton, TabTitleText } from "./styles";

const BottomTabBar: React.FC<Partial<BottomTabBarProps>> = (props) => {
  const { state, descriptors } = props;
  const router = useRouter();

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  type IoniconName = keyof typeof Ionicons.glyphMap;
  type RouteName = "index" | "recentSearch" | "favorite";

  const ICONS: Record<
    RouteName,
    { active: IoniconName; inactive: IoniconName }
  > = {
    index: { active: "home", inactive: "home-outline" },
    recentSearch: { active: "search", inactive: "search-outline" },
    favorite: { active: "heart", inactive: "heart-outline" },
  };

  const getIcon = (routeName: string, isFocused: boolean): IoniconName => {
    const iconSet = ICONS[routeName as RouteName];

    if (!iconSet) return "help-circle-outline";

    return isFocused ? iconSet.active : iconSet.inactive;
  };

  const onPress = (
    index: number,
    route: NavigationRoute<ParamListBase, string>
  ) => {
    if (route.name === "index") {
      router.push("/");
    } else {
      router.navigate(`/${route.name}` as Href);
    }
  };

  return (
    <ContainerView insets={insets}>
      {state?.routes.map((route, index) => {
        const options = descriptors?.[route.key].options;
        const label = options?.title || route.name;
        const isFocused = state.index === index;
        const iconName = getIcon(route.name, isFocused);

        return (
          <TabButton
            key={route.key}
            activeOpacity={1}
            onPress={() => onPress(index, route)}
          >
            <Ionicons
              name={iconName}
              size={32}
              color={isFocused ? theme.colors.primary1 : theme.colors.primary2}
            />
            <TabTitleText isFocused={isFocused}>{label}</TabTitleText>
          </TabButton>
        );
      })}
    </ContainerView>
  );
};

export default BottomTabBar;
