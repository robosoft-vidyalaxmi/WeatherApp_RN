import { useMediaQueryContext } from "@/src/contexts/MediaQueryProvider";
import { Platform } from "react-native";

export const useIsWeb = (): boolean => {
  const { isMobile, isTablet } = useMediaQueryContext();
  return Platform.OS === "web" && !(isMobile || isTablet);
};