import LocationTitle from "../../atoms/LocationTitle";
import FavouriteInfo from "../../molecules/FavouriteInfo";
import { Container } from "./styles";

interface LocationInfoProps {
  locationName: string;
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

const LocationInfo: React.FC<LocationInfoProps> = ({
  locationName,
  isFavourite,
  onToggleFavourite,
}) => {
  return (
    <Container>
      <LocationTitle name={locationName} />
      <FavouriteInfo isFavourite={isFavourite} onToggle={onToggleFavourite} />
    </Container>
  );
};

export default LocationInfo;
