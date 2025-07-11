import styled from "@emotion/native";

export const ContainerView = styled.View(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: 16,
  borderTopWidth: 0.5,
  borderTopColor: theme.colors.dividerColor,
  paddingTop: 20,
}));
