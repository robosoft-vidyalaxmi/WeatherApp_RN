import { Text } from "./styles";

interface LocationTitleProps {
  name: string;
}

const LocationTitle: React.FC<LocationTitleProps> = ({ name }) => {
  return <Text>{name}</Text>;
};

export default LocationTitle;
