import React, { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

interface MediaQueryContextProps {
  exSmallMobile: boolean;
  smallMobile: boolean;
  smallTablet: boolean;
  largeTablet: boolean;
  desktop: boolean;
  largeDesktop: boolean;
  extraLargeDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextProps | undefined>(
  undefined
);

export const MediaQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const exSmallMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  const smallMobile = useMediaQuery({ minWidth: 481, maxWidth: 600 });
  const smallTablet = useMediaQuery({ minWidth: 601, maxWidth: 768 });
  const largeTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const desktop = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const largeDesktop = useMediaQuery({ minWidth: 1281, maxWidth: 1440 });
  const extraLargeDesktop = useMediaQuery({ minWidth: 1441 });
  const isMobile = exSmallMobile || smallMobile;
  const isTablet = smallTablet || largeTablet;

  return (
    <MediaQueryContext.Provider
      value={{
        exSmallMobile,
        smallMobile,
        smallTablet,
        largeTablet,
        desktop,
        largeDesktop,
        extraLargeDesktop,
        isMobile,
        isTablet,
      }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = (): MediaQueryContextProps => {
  const context = useContext(MediaQueryContext);
  if (!context) {
    throw new Error(
      "useMediaQueryContext must be used within a MediaQueryProvider"
    );
  }
  return context;
};
