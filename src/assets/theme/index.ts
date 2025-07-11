import { UITheme } from "@/src/types/theme";

export const lightTheme: UITheme = {
  colors: {
    text: "#f5f5f5",
    border: "#cccccc",
    activeText: "#FFD639",
    searchBarBackgroundColor: "#ffffff30", // Semi-transparent white background
    searchInputColor: "#fff",
    placeholderTextColor: "#aaa",
    iconColor: "#fff",
    dividerColor: "rgba(255,255,255,0.3)",
    backgroundGradientStartColor: "#5B2EFF",
    backgroundGradientEndColor: "#FF5CA8",
  },
  fonts: {
    regular: "Roboto-Regular", // Required ✅
    medium: "Roboto-Medium", // Required ✅
    bold: "Roboto-Bold", // Required ✅
    thin: "Roboto-Thin", // Optional ✅
    light: "Roboto-Light", // Optional ✅
    semibold: "Roboto-SemiBold", // Optional ✅
  },
};

export const darkTheme: UITheme = {
  colors: {
    text: "#f5f5f5",
    border: "#444444",
    activeText: "#FFD639",
    searchBarBackgroundColor: "#ffffff30",
    searchInputColor: "#fff",
    placeholderTextColor: "#aaa",
    iconColor: "#fff",
    dividerColor: "rgba(255,255,255,0.3)",
    backgroundGradientStartColor: "#5B2EFF",
    backgroundGradientEndColor: "#FF5CA8",
  },
  fonts: {
    regular: "Roboto-Regular", // Required ✅
    medium: "Roboto-Medium", // Required ✅
    bold: "Roboto-Bold", // Required ✅
    thin: "Roboto-Thin", // Optional ✅
    light: "Roboto-Light", // Optional ✅
    semibold: "Roboto-SemiBold", // Optional ✅
  },
};
