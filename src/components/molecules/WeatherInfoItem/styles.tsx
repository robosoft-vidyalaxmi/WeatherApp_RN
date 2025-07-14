import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";

export const ContainerView = styled.View({
  flexDirection: "row",
  marginBottom: 10,
});

export const DataContainerView = styled.View({
  marginLeft: 8,
  flexDirection: "column",
  gap: 5,
});

export const LabelText = styled.Text(({ theme }) => ({
  fontSize: 15,
  fontFamily: theme.fonts.light,
  color: theme.colors.text,
}));

export const ValueText = styled.Text(({ theme }) => ({
  fontSize: 20,
  fontFamily: theme.fonts.medium,
  color: theme.colors.text,
}));

export const WeatherIcon = styled(Feather)(({ theme }) => ({
  color: theme.colors.iconColor,
}));
