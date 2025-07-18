import styled from "@emotion/native";

export const Text = styled.Text<{ isFavourite: boolean }>(
  ({ isFavourite, theme }) => ({
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: isFavourite ? theme.colors.activeText1 : theme.colors.text,
  })
);
