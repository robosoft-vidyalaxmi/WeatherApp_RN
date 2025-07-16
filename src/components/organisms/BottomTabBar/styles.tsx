import styled from "@emotion/native";
import { EdgeInsets } from "react-native-safe-area-context";

export const MContainer = styled.View<{ insets: EdgeInsets }>(
  ({ insets, theme }) => ({
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "pink",
    paddingVertical: 10,
    paddingBottom: insets.bottom - 10,
  })
);

export const MTabButton = styled.TouchableOpacity({
  alignItems: "center",
  paddingHorizontal: 10,
});

export const MTitle = styled.Text<{ isFocused: boolean }>(
  ({ isFocused, theme }) => ({
    color: isFocused ? "#ffffff" : "#808080",
    fontSize: 12,
    fontWeight: "500",
    paddingTop: 4,
    fontFamily: theme.fonts.regular,
  })
);
