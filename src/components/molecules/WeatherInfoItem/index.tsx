import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
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
  const iconColor = theme.colors.iconColor;
  const textColor = theme.colors.text;

  return (
    <ContainerView>
      <Feather name={icon} size={18} color={iconColor} />
      <DataContainerView>
        <LabelText>{label}</LabelText>
        <ValueText>{value}</ValueText>
      </DataContainerView>
    </ContainerView>
  );
};

export default WeatherInfoItem;
