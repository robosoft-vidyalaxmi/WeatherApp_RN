import styled from "@emotion/native";

export const ContainerView = styled.View(({ theme }) => ({
  paddingRight: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomWidth: 0.5,
  paddingTop: 20,
  paddingBottom: 0,
  marginBottom: 25,
  borderBottomColor: theme.colors.dividerColor,
}));

export const LeftView = styled.View({
  flexDirection: "row",
  gap: 24,
});

export const RightView = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  paddingBottom: 4,
});
