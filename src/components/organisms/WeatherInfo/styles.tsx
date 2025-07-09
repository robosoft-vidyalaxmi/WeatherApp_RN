import styled from "@emotion/native";

export const ContainerView = styled.View({
  marginTop: 40,
  alignItems: "center",
});

export const TemperatureText = styled.Text(({ theme }) => ({
  fontSize: 60,
  fontWeight: "bold",
  color: theme.colors.text,
}));

export const ConditionText = styled.Text(({ theme }) => ({
  fontSize: 20,
  color: theme.colors.text,
  marginBottom: 20,
}));
