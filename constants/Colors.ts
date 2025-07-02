/**
 * Brisa marka renkleri ve tema ayarları
 * Ana mavi: #0066CC, Yeşil: #4CAF50, Turuncu: #FF6B35
 */

// Brisa Ana Renkleri
export const BrisaColors = {
  primary: '#0066CC',        // Ana mavi
  secondary: '#4CAF50',      // Yeşil (sürdürülebilirlik)
  accent: '#FF6B35',         // Turuncu (enerji)
  purple: '#9C27B0',         // Mor (teknoloji)
  yellow: '#FFC107',         // Sarı (yenilenebilir enerji)
  darkBlue: '#003366',       // Koyu mavi
  lightBlue: '#E3F2FD',     // Açık mavi
  success: '#4CAF50',        // Başarı
  warning: '#FF9800',        // Uyarı
  error: '#F44336',          // Hata
  info: '#2196F3',           // Bilgi
  
  // Neutral Renkler
  white: '#FFFFFF',
  lightGray: '#F8F9FA',
  gray: '#6C757D',
  darkGray: '#343A40',
  black: '#000000',
  
  // Shadow ve Background
  shadow: 'rgba(0, 0, 0, 0.1)',
  cardBackground: '#FFFFFF',
  screenBackground: '#F8F9FA',
  
  // Status Colors
  online: '#4CAF50',
  offline: '#9E9E9E',
  pending: '#FF9800',
};

const tintColorLight = BrisaColors.primary;
const tintColorDark = BrisaColors.white;

export const Colors = {
  light: {
    text: BrisaColors.darkGray,
    background: BrisaColors.white,
    tint: tintColorLight,
    icon: BrisaColors.gray,
    tabIconDefault: BrisaColors.gray,
    tabIconSelected: tintColorLight,
    
    // Brisa Specific
    primary: BrisaColors.primary,
    secondary: BrisaColors.secondary,
    accent: BrisaColors.accent,
    cardBackground: BrisaColors.cardBackground,
    screenBackground: BrisaColors.screenBackground,
    headerBackground: BrisaColors.primary,
    headerText: BrisaColors.white,
    sectionTitle: BrisaColors.primary,
    bodyText: BrisaColors.darkGray,
    subtitleText: BrisaColors.gray,
    borderColor: '#E1E5E9',
    shadowColor: BrisaColors.shadow,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    
    // Brisa Specific - Dark Mode
    primary: BrisaColors.primary,
    secondary: BrisaColors.secondary,
    accent: BrisaColors.accent,
    cardBackground: '#1E1E1E',
    screenBackground: '#121212',
    headerBackground: BrisaColors.darkBlue,
    headerText: BrisaColors.white,
    sectionTitle: BrisaColors.lightBlue,
    bodyText: '#ECEDEE',
    subtitleText: '#9BA1A6',
    borderColor: '#333333',
    shadowColor: 'rgba(255, 255, 255, 0.1)',
  },
};

// Typography Scale
export const Typography = {
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    title: 24,
    hero: 28,
    display: 32,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
};

// Spacing Scale
export const Spacing = {
  xs: 4,
  sm: 8,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
};

// Border Radius
export const BorderRadius = {
  sm: 6,
  base: 12,
  lg: 16,
  xl: 20,
  round: 50,
};

// Shadow Presets
export const Shadows = {
  small: {
    shadowColor: BrisaColors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: BrisaColors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: BrisaColors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
};
