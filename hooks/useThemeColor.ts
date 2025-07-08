import { ThemeColors } from '@/constants/colors';
import { useColorScheme } from 'react-native';

/**
 * Custom hook to return the theme-specific color.
 *
 * @param props - Optional overrides for light/dark themes
 * @param colorName - The key in the ThemeColors object
 * @returns A color string
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ThemeColors.light
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return ThemeColors[theme][colorName];
}
