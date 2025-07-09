import React from "react";
import WeatherInfoItem from "../../molecules/WeatherInfoItem";
import { ContainerView } from "./styles";

const WeatherInfoFooter: React.FC = () => {
  return (
    <ContainerView>
      <WeatherInfoItem icon="thermometer" label="Min - Max" value="75° - 90°" />
      <WeatherInfoItem icon="cloud-rain" label="Precipitation" value="0%" />
      <WeatherInfoItem icon="droplet" label="Humidity" value="47%" />
      <WeatherInfoItem icon="wind" label="Wind" value="4 mph" />
      <WeatherInfoItem icon="eye" label="Visibility" value="12 mph" />
    </ContainerView>
  );
};

export default WeatherInfoFooter;
