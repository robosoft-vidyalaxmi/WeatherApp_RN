import { useIsWeb } from "@/src/hooks/useIsWeb";
import Feather from "@expo/vector-icons/Feather";
import { useTranslation } from "react-i18next";
import WeatherInfoItem from "../../molecules/WeatherInfoItem";
import { ContainerView, ScrollView } from "./styles";

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

const WeatherDetails: React.FC<WeatherDetailsProps> = (props) => {
  const { t } = useTranslation();
  const isWeb = useIsWeb();

  const infoItems: InfoItem[] = [
    {
      icon: "thermometer",
      labelKey: "minMaxTemperature",
      value: props.minMaxTemperature,
    },
    {
      icon: "cloud-rain",
      labelKey: "precipitation",
      value: props.percipitation,
    },
    { icon: "droplet", labelKey: "humidity", value: props.humidity },
    { icon: "wind", labelKey: "wind", value: props.wind },
    { icon: "eye", labelKey: "visibility", value: props.visibility },
  ];

  const renderItems = () => (
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

  return isWeb ? (
    renderItems()
  ) : (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderItems()}
    </ScrollView>
  );
};

export default WeatherDetails;
