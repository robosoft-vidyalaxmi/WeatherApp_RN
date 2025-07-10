import React from "react";
import { ConditionText, ContainerView, TemperatureText } from "./styles";

interface WeatherInfoProps {
  temperature: string;
  description: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  temperature,
  description,
}) => {
  return (
    <ContainerView>
      <TemperatureText>{temperature}°C</TemperatureText>
      <ConditionText>{description}</ConditionText>
    </ContainerView>
  );
};

export default WeatherInfo;
