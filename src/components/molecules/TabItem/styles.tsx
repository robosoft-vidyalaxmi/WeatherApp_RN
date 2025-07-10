import styled from "@emotion/native";

export const Pressable = styled.Pressable({
  paddingBottom: 0,
});

export const Text = styled.Text(({ theme }) => ({
  fontSize: 14,
  fontFamily: theme.fonts.regular,
  textTransform: "uppercase",
  paddingBottom: 4,
  paddingHorizontal: 20,
  color: theme.colors.text,
}));
