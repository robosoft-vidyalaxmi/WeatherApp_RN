import { setTemperatureUnit } from "@/src/store/redux/slices/unit-slice";
import { useAppDispatch } from "@/src/store/redux/store";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import { getDisplayTemperature } from "@/src/utils/temperature";
import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import TemperatureUnitToggle from "../../atoms/TemperatureUnitToggle";
import {
  ConditionText,
  ContainerView,
  RowView,
  TemperatureText,
  TemperatureUnitView,
} from "./styles";

interface WeatherInfoProps {
  iconName: keyof typeof Feather.glyphMap;
  temperature: number;
  description: string;
  unit: TemperatureUnit;
}

const TemperatureDetails: React.FC<WeatherInfoProps> = ({
  iconName,
  temperature,
  description,
  unit,
}) => {
  const theme = useTheme();

  const iconColor = theme.colors.iconColor;

  const dispatch = useAppDispatch();

  const toggleUnit = () => {
    dispatch(setTemperatureUnit(unit === "C" ? "F" : "C"));
  };

  return (
    <ContainerView>
      <Feather name={iconName} size={75} color={iconColor} />
      <RowView>
        <TemperatureText>
          {getDisplayTemperature(temperature, unit)}
        </TemperatureText>
        <TemperatureUnitView>
          <TemperatureUnitToggle selectedUnit={unit} onToggle={toggleUnit} />
        </TemperatureUnitView>
      </RowView>
      <ConditionText>{description}</ConditionText>
    </ContainerView>
  );
};

export default TemperatureDetails;
