import { StyleSheet, TouchableOpacity, ViewStyle, ActivityIndicator } from 'react-native';
import { ThemedText } from './ThemedText';
import { BrisaColors, BorderRadius, Spacing, Typography } from '@/constants/Colors';

interface BrisaButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  icon?: string;
  fullWidth?: boolean;
}

export function BrisaButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  icon,
  fullWidth = false
}: BrisaButtonProps) {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    (disabled || loading) && styles.disabled,
    style
  ];

  const textStyles = [
    styles.buttonText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    (disabled || loading) && styles.disabledText
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' ? BrisaColors.primary : BrisaColors.white}
        />
      ) : (
        <>
          {icon && (
            <ThemedText style={[styles.icon, styles[`${size}Icon`]]}>
              {icon}
            </ThemedText>
          )}
          <ThemedText style={textStyles}>
            {title}
          </ThemedText>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.base,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  
  // Variants
  primary: {
    backgroundColor: BrisaColors.primary,
    borderColor: BrisaColors.primary,
  },
  secondary: {
    backgroundColor: BrisaColors.secondary,
    borderColor: BrisaColors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: BrisaColors.primary,
  },
  text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  success: {
    backgroundColor: BrisaColors.success,
    borderColor: BrisaColors.success,
  },
  warning: {
    backgroundColor: BrisaColors.warning,
    borderColor: BrisaColors.warning,
  },
  danger: {
    backgroundColor: BrisaColors.error,
    borderColor: BrisaColors.error,
  },
  
  // Sizes
  small: {
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.sm,
    minHeight: 36,
  },
  medium: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    minHeight: 52,
  },
  
  // States
  disabled: {
    opacity: 0.5,
  },
  
  fullWidth: {
    width: '100%',
  },
  
  // Text Styles
  buttonText: {
    fontWeight: Typography.fontWeight.semibold,
    textAlign: 'center',
  },
  
  // Text Variants
  primaryText: {
    color: BrisaColors.white,
  },
  secondaryText: {
    color: BrisaColors.white,
  },
  outlineText: {
    color: BrisaColors.primary,
  },
  textText: {
    color: BrisaColors.primary,
  },
  successText: {
    color: BrisaColors.white,
  },
  warningText: {
    color: BrisaColors.white,
  },
  dangerText: {
    color: BrisaColors.white,
  },
  
  // Text Sizes
  smallText: {
    fontSize: Typography.fontSize.sm,
  },
  mediumText: {
    fontSize: Typography.fontSize.base,
  },
  largeText: {
    fontSize: Typography.fontSize.lg,
  },
  
  disabledText: {
    opacity: 0.7,
  },
  
  // Icon
  icon: {
    marginRight: Spacing.sm,
  },
  
  smallIcon: {
    fontSize: 16,
  },
  mediumIcon: {
    fontSize: 18,
  },
  largeIcon: {
    fontSize: 20,
  },
}); 