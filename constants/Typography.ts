import { Platform } from 'react-native';

// Basit font family tanımları
export const FONT_FAMILY = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const FONT_WEIGHTS = {
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
  black: '900' as const,
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
  '6xl': 48,
};

export const LINE_HEIGHTS = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
};

// Basitleştirilmiş Typography Styles
export const TYPOGRAPHY = {
  // Headers
  h1: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES['4xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: FONT_SIZES['4xl'] * LINE_HEIGHTS.tight,
  },
  h2: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES['3xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: FONT_SIZES['3xl'] * LINE_HEIGHTS.tight,
  },
  h3: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES['2xl'],
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: FONT_SIZES['2xl'] * LINE_HEIGHTS.tight,
  },
  h4: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: FONT_SIZES.xl * LINE_HEIGHTS.normal,
  },
  h5: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.normal,
  },
  h6: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
  },
  
  // Body Text
  body: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
  },
  bodyLarge: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: FONT_SIZES.lg * LINE_HEIGHTS.normal,
  },
  bodySmall: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.normal,
  },
  
  // Special
  caption: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: FONT_SIZES.xs * LINE_HEIGHTS.normal,
  },
  button: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.tight,
  },
  link: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
  },
}; 