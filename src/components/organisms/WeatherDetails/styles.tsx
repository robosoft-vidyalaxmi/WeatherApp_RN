import styled from "@emotion/native";

export const ContainerView = styled.View(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-around",
  gap: 16,
  borderTopWidth: 0.5,
  borderTopColor: theme.colors.dividerColor,
  paddingTop: 20,
}));

export const ScrollView = styled.ScrollView({
  flexGrow: 0, // Prevents ScrollView from taking full height
});
