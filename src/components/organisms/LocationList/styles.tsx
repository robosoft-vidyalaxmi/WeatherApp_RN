import styled from "@emotion/native";

export const Text = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  color: theme.colors.text,
}));

export const HeaderView = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 15,
  marginVertical: 15,
});
