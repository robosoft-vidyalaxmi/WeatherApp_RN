import { WeatherData } from "@/src/models/weather";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import React from "react";
import TemperatureDetails from "../organisms/TemperatureDetails";

interface Props {
  weather: WeatherData;
  unit: TemperatureUnit;
}

const TemperatureSection: React.FC<Props> = ({ weather, unit }) => {
  return (
    <TemperatureDetails
      iconName={weather.icon}
      temperature={weather.temperature}
      description={weather.condition}
      unit={unit}
    />
  );
};

export default TemperatureSection;
