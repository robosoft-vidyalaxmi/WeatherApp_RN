// Define the mandatory color keys
export type ColorKeys =
  | "text"
  | "text2"
  | "primary1"
  | "primary2"
  | "border"
  | "activeText1"
  | "activeText2"
  | "searchBarBackgroundColor"
  | "searchInputColor"
  | "placeholderTextColor"
  | "iconColor"
  | "dividerColor"
  | "backgroundGradientStartColor"
  | "backgroundGradientEndColor"
  | "tabBarBackgroundColor"
  | "dropdownBorderColor"
  | "dropdownItemBottomBorderColor"
  | "listItemBackgroundColor"
  | "modalConfirmButtonBackgroundColor"
  | "modalBackgroundColor"
  | "overlayBackgroundColor"
  | "modalShadowColor";

// Define the optional color keys
export type OptionalColorKeys = "primary3" | "primary4";

// Define the Colors type with required and optional colors
export type Colors = {
  [key in ColorKeys]: string; // Required colors
} & Partial<{
  [key in OptionalColorKeys]: string; // Optional colors
}>;

// Define the mandatory font keys
export type FontKeys = "regular" | "medium" | "bold";

// Define the optional font keys
export type OptionalFontKeys = "thin" | "light" | "semibold";

// Define the Fonts type with required and optional fonts
export type Fonts = {
  [key in FontKeys]: string; // Required fonts
} & Partial<{
  [key in OptionalFontKeys]: string; // Optional fonts
}>;

// Define the UITheme interface
export interface UITheme {
  colors: Colors;
  fonts: Fonts;
}