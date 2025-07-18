import styled from "@emotion/native";
import { EdgeInsets } from "react-native-safe-area-context";

export const ContainerView = styled.View<{ insets: EdgeInsets }>(
  ({ insets, theme }) => ({
    flexDirection: "row",
    backgroundColor: theme.colors.tabBarBackgroundColor,
    paddingVertical: 10,
    paddingBottom: insets.bottom - 10,
  })
);

export const TabButton = styled.TouchableOpacity({
  alignItems: "center",
  paddingHorizontal: 10,
  flex: 1,
  justifyContent: "center",
});

export const TabTitleText = styled.Text<{ isFocused: boolean }>(
  ({ isFocused, theme }) => ({
    color: isFocused ? theme.colors.primary1 : theme.colors.primary2,
    fontSize: 12,
    fontWeight: "500",
    paddingTop: 4,
    fontFamily: theme.fonts.regular,
  })
);
