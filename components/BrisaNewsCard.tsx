import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { BrisaColors, Shadows, BorderRadius, Spacing, Typography } from '@/constants/Colors';

interface BrisaNewsCardProps {
  title: string;
  summary?: string;
  date: string;
  category?: string;
  onPress?: () => void;
  style?: ViewStyle;
  isNew?: boolean;
}

export function BrisaNewsCard({
  title,
  summary,
  date,
  category,
  onPress,
  style,
  isNew = false
}: BrisaNewsCardProps) {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent 
      style={[styles.card, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.metaInfo}>
          {category && (
            <View style={styles.categoryContainer}>
              <ThemedText style={styles.category}>
                {category}
              </ThemedText>
            </View>
          )}
          {isNew && (
            <View style={styles.newBadge}>
              <ThemedText style={styles.newBadgeText}>
                YENİ
              </ThemedText>
            </View>
          )}
        </View>
        <ThemedText style={styles.date}>
          {date}
        </ThemedText>
      </View>
      
      <ThemedText type="defaultSemiBold" style={styles.title}>
        {title}
      </ThemedText>
      
      {summary && (
        <ThemedText style={styles.summary} numberOfLines={3}>
          {summary}
        </ThemedText>
      )}
      
      {onPress && (
        <View style={styles.readMore}>
          <ThemedText style={styles.readMoreText}>
            Devamını Oku →
          </ThemedText>
        </View>
      )}
    </CardComponent>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BrisaColors.cardBackground,
    borderRadius: BorderRadius.base,
    padding: Spacing.base,
    marginBottom: Spacing.base,
    ...Shadows.medium,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  categoryContainer: {
    backgroundColor: BrisaColors.lightBlue,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    marginRight: Spacing.sm,
  },
  
  category: {
    fontSize: Typography.fontSize.xs,
    color: BrisaColors.primary,
    fontWeight: Typography.fontWeight.semibold,
    textTransform: 'uppercase',
  },
  
  newBadge: {
    backgroundColor: BrisaColors.accent,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm,
  },
  
  newBadgeText: {
    fontSize: Typography.fontSize.xs,
    color: BrisaColors.white,
    fontWeight: Typography.fontWeight.bold,
  },
  
  date: {
    fontSize: Typography.fontSize.xs,
    color: BrisaColors.gray,
    marginLeft: Spacing.sm,
  },
  
  title: {
    fontSize: Typography.fontSize.base,
    color: BrisaColors.darkGray,
    lineHeight: Typography.lineHeight.normal * Typography.fontSize.base,
    marginBottom: Spacing.sm,
  },
  
  summary: {
    fontSize: Typography.fontSize.sm,
    color: BrisaColors.gray,
    lineHeight: Typography.lineHeight.relaxed * Typography.fontSize.sm,
    marginBottom: Spacing.sm,
  },
  
  readMore: {
    alignSelf: 'flex-start',
  },
  
  readMoreText: {
    fontSize: Typography.fontSize.sm,
    color: BrisaColors.primary,
    fontWeight: Typography.fontWeight.medium,
  },
}); 