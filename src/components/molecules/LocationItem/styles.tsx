import styled from "@emotion/native";

export const Text = styled.Text(({ theme }) => ({
  fontFamily: theme.fonts.regular,
  color: theme.colors.text,
}));

export const ItemContainer = styled.View(({ theme }) => ({
  padding: 16,
  backgroundColor: theme.colors.listItemBackgroundColor,
  marginBottom: 1,
}));

export const InfoRow = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LocationText = styled.Text(({ theme }) => ({
  color: theme.colors.activeText1,
  fontSize: 16,
  fontFamily: theme.fonts.medium,
  flex: 1,
}));

export const WeatherInfo = styled.View({
  flexDirection: "row",
  alignItems: "center",
  gap: 26,
  justifyContent: "flex-start",
  flex: 1,
});

export const TemperatureAndUnitContainer = styled.View({
  flexDirection: "row",
  gap: 4,
});

export const TemperatureText = styled.Text(({ theme }) => ({
  fontSize: 26,
  color: theme.colors.text,
  fontFamily: theme.fonts.medium,
}));

export const UnitText = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.text,
  fontFamily: theme.fonts.regular,
  alignSelf: "center",
}));

export const ConditionText = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.text,
  fontFamily: theme.fonts.regular,
}));

export const RightSection = styled.View({
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 6,
});
