import { StyleSheet, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { BrisaColors, BorderRadius, Spacing, Typography } from '@/constants/Colors';

interface BrisaProgressBarProps {
  label: string;
  progress: number; // 0-100
  color?: string;
  backgroundColor?: string;
  height?: number;
  showPercentage?: boolean;
  style?: ViewStyle;
}

export function BrisaProgressBar({
  label,
  progress,
  color = BrisaColors.secondary,
  backgroundColor = BrisaColors.lightGray,
  height = 8,
  showPercentage = true,
  style
}: BrisaProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <View style={[styles.container, style]}>
      <View style={styles.labelContainer}>
        <ThemedText style={styles.label}>
          {label}
        </ThemedText>
        {showPercentage && (
          <ThemedText style={styles.percentage}>
            %{clampedProgress}
          </ThemedText>
        )}
      </View>
      
      <View style={[styles.progressContainer, { backgroundColor, height, borderRadius: height / 2 }]}>
        <View 
          style={[
            styles.progressBar, 
            { 
              backgroundColor: color, 
              width: `${clampedProgress}%`,
              height: height,
              borderRadius: height / 2
            }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.base,
  },
  
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  
  label: {
    fontSize: Typography.fontSize.sm,
    color: BrisaColors.darkGray,
    fontWeight: Typography.fontWeight.medium,
    flex: 1,
  },
  
  percentage: {
    fontSize: Typography.fontSize.sm,
    color: BrisaColors.primary,
    fontWeight: Typography.fontWeight.semibold,
    marginLeft: Spacing.sm,
  },
  
  progressContainer: {
    overflow: 'hidden',
  },
  
  progressBar: {
    // Progress bar fill styling
  },
}); 