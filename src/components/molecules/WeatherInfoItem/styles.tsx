import styled from "@emotion/native";

export const ContainerView = styled.View({
  flexDirection: "row",
  marginBottom: 10,
});

export const DataContainerView = styled.View({
  marginLeft: 8,
  flexDirection: "column",
});

export const LabelText = styled.Text(({ theme }) => ({
  fontSize: 15,
  fontFamily: theme.fonts.regular,
  marginTop: 4,
  color: theme.colors.text,
}));

export const ValueText = styled.Text(({ theme }) => ({
  fontSize: 20,
  fontFamily: theme.fonts.medium,
  color: theme.colors.text,
}));
