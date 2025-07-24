import styled from "@emotion/native";

export const EmptyWrapper = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

export const IconWrapper = styled.View({
  marginBottom: 16,
});

export const EmptyStateText = styled.Text(({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.fonts.regular,
}));
