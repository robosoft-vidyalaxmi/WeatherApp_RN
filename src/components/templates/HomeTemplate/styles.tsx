import styled from "@emotion/native";

export const View = styled.View({
  flex: 1,
});

export const ActivityIndicator = styled.ActivityIndicator({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

export const ErrorContainerView = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

export const ErrorText = styled.Text(({ theme }) => ({
  color: theme.colors.text,
  font: theme.fonts.regular,
}));

export const DateTimeView = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  paddingBottom: 4,
  justifyContent: "center",
  flexShrink: 1,
});
