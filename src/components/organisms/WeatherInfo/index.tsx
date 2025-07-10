import { useWeather } from "@/src/hooks/useWeather";
import React from "react";
import { ConditionText, ContainerView, TemperatureText } from "./styles";

const WeatherInfo: React.FC = () => {
  const { data } = useWeather();

  return (
    <ContainerView>
      <TemperatureText>{data.temperature}°</TemperatureText>
      <ConditionText>{data.condition}</ConditionText>
    </ContainerView>
  );
};

export default WeatherInfo;
