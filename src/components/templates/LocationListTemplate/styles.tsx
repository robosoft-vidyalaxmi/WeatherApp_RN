import styled from "@emotion/native";

export const Text = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  color: theme.colors.text,
}));

export const CenteredView = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});
