import styled from "@emotion/native";

export const Pressable = styled.Pressable({
  paddingBottom: 0,
});

interface CustomProps {
  isActive: boolean;
}

export const Text = styled.Text<CustomProps>(({ isActive, theme }) => ({
  fontSize: 14,
  fontFamily: theme.fonts.regular,
  textTransform: "uppercase",
  paddingBottom: 4,
  paddingHorizontal: 20,
  color: isActive ? theme.colors.activeText1 : theme.colors.text,
  borderBottomColor: isActive ? theme.colors.activeText1 : "transparent",
  borderBottomWidth: isActive ? 2 : 0,
}));
