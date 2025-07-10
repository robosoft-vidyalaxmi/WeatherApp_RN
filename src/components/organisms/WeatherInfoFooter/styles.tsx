import styled from "@emotion/native";

export const ContainerView = styled.View(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap", // ⭐️ allows wrapping
  justifyContent: "space-around", // or 'flex-start' / 'center' as needed
  gap: 16,
  borderTopWidth: 0.5,
  borderTopColor: theme.colors.dividerColor,
  paddingTop: 20,
}));
