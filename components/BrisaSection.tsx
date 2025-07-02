import { StyleSheet, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { BrisaColors, Spacing, Typography } from '@/constants/Colors';

interface BrisaSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  style?: ViewStyle;
  titleColor?: string;
  spacing?: 'none' | 'small' | 'medium' | 'large';
  headerActions?: React.ReactNode;
}

export function BrisaSection({
  title,
  subtitle,
  children,
  style,
  titleColor = BrisaColors.primary,
  spacing = 'medium',
  headerActions
}: BrisaSectionProps) {
  return (
    <View style={[styles.section, styles[spacing], style]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <ThemedText type="subtitle" style={[styles.title, { color: titleColor }]}>
            {title}
          </ThemedText>
          {subtitle && (
            <ThemedText style={styles.subtitle}>
              {subtitle}
            </ThemedText>
          )}
        </View>
        {headerActions && (
          <View style={styles.actions}>
            {headerActions}
          </View>
        )}
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: Spacing.base,
  },
  
  // Spacing variants
  none: {
    marginBottom: 0,
  },
  small: {
    marginBottom: Spacing.sm,
  },
  medium: {
    marginBottom: Spacing.lg,
  },
  large: {
    marginBottom: Spacing.xxl,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.base,
  },
  
  titleContainer: {
    flex: 1,
  },
  
  title: {
    marginBottom: Spacing.xs,
  },
  
  subtitle: {
    fontSize: Typography.fontSize.sm,
    color: BrisaColors.gray,
    lineHeight: Typography.lineHeight.normal * Typography.fontSize.sm,
  },
  
  actions: {
    marginLeft: Spacing.base,
  },
  
  content: {
    // Content styling can be customized per usage
  },
}); 