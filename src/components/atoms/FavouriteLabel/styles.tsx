import styled from "@emotion/native";

interface CustomProps {
  isFavourite: boolean;
}

export const Text = styled.Text<CustomProps>(({ isFavourite, theme }) => ({
  fontSize: 14,
  fontFamily: theme.fonts.regular,
  color: isFavourite ? theme.colors.activeText1 : theme.colors.text,
}));
