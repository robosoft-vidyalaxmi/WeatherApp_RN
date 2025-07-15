import { WeatherData } from "@/src/models/weather";
import { TemperatureUnit } from "@/src/types/temperatureUnit";
import {
  formatKMH,
  formatMeters,
  formatPercent,
  formatTemperatureRange,
} from "@/src/utils/formatters";
import React from "react";
import WeatherDetails from "../organisms/WeatherDetails";

interface Props {
  weather: WeatherData;
  unit: TemperatureUnit;
}

const WeatherDetailsSection: React.FC<Props> = ({ weather, unit }) => {
  const { tempMin, tempMax, precipitation, humidity, windspeed, visibility } =
    weather;

  return (
    <WeatherDetails
      minMaxTemperature={formatTemperatureRange(tempMin, tempMax, unit)}
      percipitation={formatPercent(precipitation)}
      humidity={formatPercent(humidity)}
      wind={formatKMH(windspeed)}
      visibility={formatMeters(visibility)}
    />
  );
};

export default WeatherDetailsSection;
