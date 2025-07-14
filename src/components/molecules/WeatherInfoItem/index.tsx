import { Feather } from "@expo/vector-icons";
import {
  ContainerView,
  DataContainerView,
  LabelText,
  ValueText,
  WeatherIcon,
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
  return (
    <ContainerView>
      <WeatherIcon name={icon} size={25} />
      <DataContainerView>
        <LabelText>{label}</LabelText>
        <ValueText>{value}</ValueText>
      </DataContainerView>
    </ContainerView>
  );
};

export default WeatherInfoItem;
