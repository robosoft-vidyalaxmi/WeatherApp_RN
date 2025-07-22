import { useLocalSearchParams } from "expo-router";

import CityInfoPage from "@/src/components/pages/CityInfo";
import { LocationData } from "@/src/types/location";
import { getParamValue } from "@/src/utils/routing";

const CityInfoScreen: React.FC = () => {
  const { latitude, longitude, city, region, country } = useLocalSearchParams();
  const location: LocationData = {
    latitude: parseFloat(getParamValue(latitude)),
    longitude: parseFloat(getParamValue(longitude)),
    city: getParamValue(city),
    region: getParamValue(region),
    country: getParamValue(country),
  };
  console.log(location);
  return <CityInfoPage location={location} />;
};

export default CityInfoScreen;
