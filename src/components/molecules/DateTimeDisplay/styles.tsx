import styled from "@emotion/native";

export const Text = styled.Text(({ theme }) => ({
  fontSize: 12,
  fontFamily: theme.fonts.regular,
  color: theme.colors.text,
}));

export const Container = styled.View({
  flexDirection: "row",
  gap: 12,
  alignItems: "center",
});
