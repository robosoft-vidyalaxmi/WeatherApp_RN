import styled from "@emotion/native";

export const Text = styled.Text(({ theme }) => ({
  fontSize: 18,
  fontFamily: theme.fonts.semibold,
  marginBottom: 6,
  color: theme.colors.text,
}));
