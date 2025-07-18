import styled from "@emotion/native";

export const ContainerView = styled.View(({ theme }) => ({
  paddingRight: 10,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomWidth: 0.5,
  paddingTop: 20,
  paddingBottom: 0,
  marginBottom: 15,
  borderBottomColor: theme.colors.dividerColor,
}));

export const TabsView = styled.View({
  flexDirection: "row",
  flexShrink: 1,
  gap: 14,
  minWidth: "60%",
});

export const NavText = styled.Text<{ isActive: boolean }>(
  ({ isActive, theme }) => ({
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    paddingLeft: 16,
    paddingRight: 16,
    color: isActive ? theme.colors.activeText1 : theme.colors.text,
  })
);

export const DateTimeView = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  paddingBottom: 4,
  justifyContent: "flex-end",
  flexShrink: 1,
});
