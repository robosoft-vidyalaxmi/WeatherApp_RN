import { useTheme } from "@emotion/react";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { NavigationRoute, ParamListBase } from "@react-navigation/native";
import { Href, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MContainer, MTabButton, MTitle } from "./styles";

const BottomTabBar: React.FC<Partial<BottomTabBarProps>> = (props) => {
  const { state, descriptors } = props;
  const router = useRouter();

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  type IoniconName = keyof typeof Ionicons.glyphMap;

  const getIcons = (routeName: string, isFocused: boolean) => {
    const icons: Record<
      string,
      { active: IoniconName; inactive: IoniconName }
    > = {
      index: { active: "home", inactive: "home-outline" },
      recentSearch: { active: "search", inactive: "search-outline" },
      favorite: { active: "heart", inactive: "heart-outline" },
    };

    return icons[routeName]
      ? isFocused
        ? icons[routeName].active
        : icons[routeName].inactive
      : "help-circle-outline";
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
    <MContainer insets={insets}>
      {state?.routes.map((route, index) => {
        const options = descriptors?.[route.key].options;
        const label = options?.title || route.name;
        const isFocused = state.index === index;
        const iconName = getIcons(route.name, isFocused);

        return (
          <MTabButton
            key={route.key}
            activeOpacity={1}
            onPress={() => onPress(index, route)}
          >
            <Ionicons
              name={iconName}
              size={32}
              color={isFocused ? theme.colors.primary1 : theme.colors.primary3}
            />
            <MTitle isFocused={isFocused}>{label}</MTitle>
          </MTabButton>
        );
      })}
    </MContainer>
  );
};

export default BottomTabBar;
