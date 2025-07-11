import Feather from "@expo/vector-icons/Feather";
import { useTranslation } from "react-i18next";
import WeatherInfoItem from "../../molecules/WeatherInfoItem";
import { ContainerView } from "./styles";

interface WeatherDetailsProps {
  minMaxTemperature: string;
  percipitation: string;
  humidity: string;
  wind: string;
  visibility: string;
}

interface InfoItem {
  icon: keyof typeof Feather.glyphMap; // Feather icon type
  labelKey: string;
  value: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  minMaxTemperature,
  percipitation,
  humidity,
  wind,
  visibility,
}) => {
  const { t } = useTranslation();

  const infoItems: InfoItem[] = [
    {
      icon: "thermometer",
      labelKey: "minMaxTemperature",
      value: minMaxTemperature,
    },
    {
      icon: "cloud-rain",
      labelKey: "precipitation",
      value: percipitation,
    },
    {
      icon: "droplet",
      labelKey: "humidity",
      value: humidity,
    },
    {
      icon: "wind",
      labelKey: "wind",
      value: wind,
    },
    {
      icon: "eye",
      labelKey: "visibility",
      value: visibility,
    },
  ];

  return (
    <ContainerView>
      {infoItems.map(({ icon, labelKey, value }) => (
        <WeatherInfoItem
          key={labelKey}
          icon={icon}
          label={t(labelKey)}
          value={value}
        />
      ))}
    </ContainerView>
  );
};

export default WeatherDetails;
