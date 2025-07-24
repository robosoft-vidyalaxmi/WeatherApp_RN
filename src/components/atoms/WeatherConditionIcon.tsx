import { Feather } from "@expo/vector-icons";

interface WeatherConditionIconProps {
  icon: keyof typeof Feather.glyphMap;
  color: string;
  size?: number;
}

const WeatherConditionIcon: React.FC<WeatherConditionIconProps> = ({
  icon,
  color,
  size,
}) => {
  return <Feather name={icon} size={size} color={color} />;
};

export default WeatherConditionIcon;
