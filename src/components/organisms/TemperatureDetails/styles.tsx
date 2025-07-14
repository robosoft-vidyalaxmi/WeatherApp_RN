import styled from "@emotion/native";

export const ContainerView = styled.View({
  marginTop: 40,
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

export const RowView = styled.View({
  flexDirection: "row",
  alignItems: "flex-end",
  gap: 8,
});

export const TemperatureText = styled.Text(({ theme }) => ({
  fontSize: 75,
  fontFamily: theme.fonts.bold,
  color: theme.colors.text,
}));

export const TemperatureUnitView = styled.View({
  paddingBottom: 20,
});

export const ConditionText = styled.Text(({ theme }) => ({
  fontSize: 20,
  fontFamily: theme.fonts.light,
  color: theme.colors.text,
  marginBottom: 20,
}));
