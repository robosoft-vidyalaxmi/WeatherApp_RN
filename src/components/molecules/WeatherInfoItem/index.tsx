import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import WeatherConditionIcon from "../../atoms/WeatherConditionIcon";
import {
  ContainerView,
  DataContainerView,
  LabelText,
  ValueText,
} from "./styles";

interface WeatherInfoItemProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  value: string;
}

const WeatherInfoItem: React.FC<WeatherInfoItemProps> = ({
  icon,
  label,
  value,
}) => {
  const theme = useTheme();
  return (
    <ContainerView>
      <WeatherConditionIcon icon={icon} color={theme.colors.iconColor} />
      <DataContainerView>
        <LabelText>{label}</LabelText>
        <ValueText>{value}</ValueText>
      </DataContainerView>
    </ContainerView>
  );
};

export default WeatherInfoItem;
