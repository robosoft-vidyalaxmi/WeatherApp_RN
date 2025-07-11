import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { ConditionText, ContainerView, TemperatureText } from "./styles";

interface WeatherInfoProps {
  iconName: keyof typeof Feather.glyphMap;
  temperature: string;
  description: string;
}

const TemperatureDetails: React.FC<WeatherInfoProps> = ({
  iconName,
  temperature,
  description,
}) => {
  const theme = useTheme();
  const iconColor = theme.colors.iconColor;
  return (
    <ContainerView>
      <Feather name={iconName} size={75} color={iconColor} />
      <TemperatureText>{temperature}</TemperatureText>
      <ConditionText>{description}</ConditionText>
    </ContainerView>
  );
};

export default TemperatureDetails;
