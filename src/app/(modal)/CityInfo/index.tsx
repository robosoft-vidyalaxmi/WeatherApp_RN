import { useLocalSearchParams } from "expo-router";

import CityInfoPage from "@/src/components/pages/CityInfo";
import { LocationData } from "@/src/types/location";
import { getParamValue } from "@/src/utils/routing";

const CityInfoScreen: React.FC = () => {
  const { lat, lon, name } = useLocalSearchParams();
  const location: LocationData = {
    latitude: parseFloat(getParamValue(lat)),
    longitude: parseFloat(getParamValue(lon)),
    city: getParamValue(name),
  };
  return <CityInfoPage location={location} />;
};

export default CityInfoScreen;
