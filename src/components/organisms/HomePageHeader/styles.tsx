import styled from "@emotion/native";

export const HeaderView = styled.View({
  marginBottom: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 8,
});

export const LogoText = styled.Text(({ theme }) => ({
  fontSize: 28,
  fontWeight: "bold",
  marginRight: 12,
  alignSelf: "center",
  color: theme.colors.text,
}));
