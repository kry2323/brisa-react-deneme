import { TextStyle, ViewStyle } from 'react-native';
import { FONT_FAMILY, FONT_SIZES, FONT_WEIGHTS } from './Typography';

// Colors (Bootstrap inspired)
export const COLORS = {
  // Primary Brisa Colors
  'brisa-blue': '#0066CC',
  'brisa-dark-blue': '#0C1C8C',
  'brisa-light-blue': '#4A90E2',
  
  // Secondary Colors
  primary: '#0066CC',
  secondary: '#6c757d',
  success: '#4CAF50',
  danger: '#dc3545',
  warning: '#FF6B35',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  
  // Grayscale
  white: '#ffffff',
  'gray-100': '#f8f9fa',
  'gray-200': '#e9ecef',
  'gray-300': '#dee2e6',
  'gray-400': '#ced4da',
  'gray-500': '#adb5bd',
  'gray-600': '#6c757d',
  'gray-700': '#495057',
  'gray-800': '#343a40',
  'gray-900': '#212529',
  black: '#000000',
};

// Spacing (Bootstrap rem system)
export const SPACING = {
  0: 0,
  1: 4,    // 0.25rem
  2: 8,    // 0.5rem
  3: 12,   // 0.75rem
  4: 16,   // 1rem
  5: 20,   // 1.25rem
  6: 24,   // 1.5rem
  8: 32,   // 2rem
  10: 40,  // 2.5rem
  12: 48,  // 3rem
  16: 64,  // 4rem
  20: 80,  // 5rem
  24: 96,  // 6rem
};

// Border Radius
export const BORDER_RADIUS = {
  0: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
};

// Shadows
export const SHADOWS = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
};

// Utility Style Functions (Bootstrap-like classes)
export const utils = {
  // Margin utilities
  m: (size: keyof typeof SPACING): ViewStyle => ({ margin: SPACING[size] }),
  mt: (size: keyof typeof SPACING): ViewStyle => ({ marginTop: SPACING[size] }),
  mb: (size: keyof typeof SPACING): ViewStyle => ({ marginBottom: SPACING[size] }),
  ml: (size: keyof typeof SPACING): ViewStyle => ({ marginLeft: SPACING[size] }),
  mr: (size: keyof typeof SPACING): ViewStyle => ({ marginRight: SPACING[size] }),
  mx: (size: keyof typeof SPACING): ViewStyle => ({ marginHorizontal: SPACING[size] }),
  my: (size: keyof typeof SPACING): ViewStyle => ({ marginVertical: SPACING[size] }),

  // Padding utilities
  p: (size: keyof typeof SPACING): ViewStyle => ({ padding: SPACING[size] }),
  pt: (size: keyof typeof SPACING): ViewStyle => ({ paddingTop: SPACING[size] }),
  pb: (size: keyof typeof SPACING): ViewStyle => ({ paddingBottom: SPACING[size] }),
  pl: (size: keyof typeof SPACING): ViewStyle => ({ paddingLeft: SPACING[size] }),
  pr: (size: keyof typeof SPACING): ViewStyle => ({ paddingRight: SPACING[size] }),
  px: (size: keyof typeof SPACING): ViewStyle => ({ paddingHorizontal: SPACING[size] }),
  py: (size: keyof typeof SPACING): ViewStyle => ({ paddingVertical: SPACING[size] }),

  // Background colors
  bg: (color: keyof typeof COLORS): ViewStyle => ({ backgroundColor: COLORS[color] }),

  // Text colors  
  text: (color: keyof typeof COLORS): TextStyle => ({ color: COLORS[color] }),

  // Border radius
  rounded: (size: keyof typeof BORDER_RADIUS): ViewStyle => ({ borderRadius: BORDER_RADIUS[size] }),

  // Shadows
  shadow: (size: keyof typeof SHADOWS): ViewStyle => SHADOWS[size],

  // Flexbox utilities
  flex: {
    row: { flexDirection: 'row' as const },
    col: { flexDirection: 'column' as const },
    center: { justifyContent: 'center' as const, alignItems: 'center' as const },
    between: { justifyContent: 'space-between' as const },
    around: { justifyContent: 'space-around' as const },
    evenly: { justifyContent: 'space-evenly' as const },
    start: { justifyContent: 'flex-start' as const },
    end: { justifyContent: 'flex-end' as const },
    itemsCenter: { alignItems: 'center' as const },
    itemsStart: { alignItems: 'flex-start' as const },
    itemsEnd: { alignItems: 'flex-end' as const },
    wrap: { flexWrap: 'wrap' as const },
    nowrap: { flexWrap: 'nowrap' as const },
    flex1: { flex: 1 },
  },

  // Typography utilities
  font: {
    xs: { fontSize: FONT_SIZES.xs, fontFamily: FONT_FAMILY },
    sm: { fontSize: FONT_SIZES.sm, fontFamily: FONT_FAMILY },
    base: { fontSize: FONT_SIZES.base, fontFamily: FONT_FAMILY },
    lg: { fontSize: FONT_SIZES.lg, fontFamily: FONT_FAMILY },
    xl: { fontSize: FONT_SIZES.xl, fontFamily: FONT_FAMILY },
    '2xl': { fontSize: FONT_SIZES['2xl'], fontFamily: FONT_FAMILY },
    '3xl': { fontSize: FONT_SIZES['3xl'], fontFamily: FONT_FAMILY },
    '4xl': { fontSize: FONT_SIZES['4xl'], fontFamily: FONT_FAMILY },
    light: { fontWeight: FONT_WEIGHTS.light, fontFamily: FONT_FAMILY },
    regular: { fontWeight: FONT_WEIGHTS.regular, fontFamily: FONT_FAMILY },
    medium: { fontWeight: FONT_WEIGHTS.medium, fontFamily: FONT_FAMILY },
    semibold: { fontWeight: FONT_WEIGHTS.semibold, fontFamily: FONT_FAMILY },
    bold: { fontWeight: FONT_WEIGHTS.bold, fontFamily: FONT_FAMILY },
    black: { fontWeight: FONT_WEIGHTS.black, fontFamily: FONT_FAMILY },
  },

  // Position utilities
  position: {
    absolute: { position: 'absolute' as const },
    relative: { position: 'relative' as const },
  },

  // Width & Height utilities  
  w: {
    full: { width: '100%' },
    half: { width: '50%' },
    third: { width: '33.333%' },
    quarter: { width: '25%' },
  },
  h: {
    full: { height: '100%' },
    half: { height: '50%' },
  },

  // Border utilities
  border: {
    0: { borderWidth: 0 },
    1: { borderWidth: 1 },
    2: { borderWidth: 2 },
    t: (width: number) => ({ borderTopWidth: width }),
    b: (width: number) => ({ borderBottomWidth: width }),
    l: (width: number) => ({ borderLeftWidth: width }),
    r: (width: number) => ({ borderRightWidth: width }),
  },

  // Text alignment
  textAlign: {
    left: { textAlign: 'left' as const },
    center: { textAlign: 'center' as const },
    right: { textAlign: 'right' as const },
  },
};

// Predefined component styles (Bootstrap components)
export const components = {
  // Card styles
  card: {
    ...utils.bg('white'),
    ...utils.rounded('lg'),
    ...utils.shadow('md'),
    ...utils.p(4),
  },
  
  // Button styles
  btn: {
    base: {
      ...utils.px(4),
      ...utils.py(3),
      ...utils.rounded('md'),
      ...utils.flex.center,
    },
    primary: {
      ...utils.bg('brisa-blue'),
    },
    secondary: {
      ...utils.bg('gray-500'),
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: COLORS['brisa-blue'],
    },
  },

  // Header styles
  header: {
    ...utils.bg('white'),
    ...utils.px(4),
    ...utils.py(3),
    ...utils.shadow('sm'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS['gray-200'],
  },

  // Container styles
  container: {
    ...utils.px(4),
    width: '100%',
  },

  // Section styles
  section: {
    ...utils.py(6),
    ...utils.px(4),
  },
};

// Helper function to combine multiple utilities
export const combine = (...styles: any[]) => {
  return Object.assign({}, ...styles);
}; 