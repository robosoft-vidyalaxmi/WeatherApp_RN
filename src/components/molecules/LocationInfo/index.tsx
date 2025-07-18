import { useIsWeb } from "@/src/hooks/useIsWeb";
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
  const isWeb = useIsWeb();
  return (
    <Container isWeb={isWeb}>
      <LocationTitle name={locationName} />
      <FavouriteInfo isFavourite={isFavourite} onToggle={onToggleFavourite} />
    </Container>
  );
};

export default LocationInfo;
