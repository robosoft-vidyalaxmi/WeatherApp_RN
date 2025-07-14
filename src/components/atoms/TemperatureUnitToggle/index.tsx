import { TemperatureUnit } from "@/src/types/temperatureUnit";
import React from "react";
import { ToggleContainer, ToggleOption, ToggleText } from "./styles";

interface Props {
  selectedUnit: TemperatureUnit;
  onToggle: (unit: TemperatureUnit) => void;
}

const TemperatureUnitToggle: React.FC<Props> = ({ selectedUnit, onToggle }) => {
  return (
    <ToggleContainer>
      <ToggleOption
        selected={selectedUnit === "C"}
        onPress={() => onToggle("C")}
      >
        <ToggleText selected={selectedUnit === "C"}>°C</ToggleText>
      </ToggleOption>
      <ToggleOption
        selected={selectedUnit === "F"}
        onPress={() => onToggle("F")}
      >
        <ToggleText selected={selectedUnit === "F"}>°F</ToggleText>
      </ToggleOption>
    </ToggleContainer>
  );
};

export default TemperatureUnitToggle;
