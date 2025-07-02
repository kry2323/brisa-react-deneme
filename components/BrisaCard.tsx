import { TYPOGRAPHY } from '@/constants/Typography';
import { combine, components, utils } from '@/constants/Utilities';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BrisaCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  onPress?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  children?: React.ReactNode;
}

export function BrisaCard({ 
  title, 
  subtitle, 
  description, 
  onPress, 
  variant = 'default', 
  children 
}: BrisaCardProps) {
  
  // Variant styles using utility system
  const variantStyles = {
    default: combine(
      components.card,
      utils.border.l(4),
      { borderLeftColor: '#0066CC' }
    ),
    primary: combine(
      components.card,
      utils.bg('brisa-blue'),
      utils.border.l(4),
      { borderLeftColor: '#0C1C8C' }
    ),
    success: combine(
      components.card,
      utils.bg('success'),
      utils.border.l(4),
      { borderLeftColor: '#4CAF50' }
    ),
    warning: combine(
      components.card,
      utils.bg('warning'),
      utils.border.l(4),
      { borderLeftColor: '#FF6B35' }
    ),
  };

  const textColor = variant === 'primary' ? 'white' : 'gray-800';

  const cardContent = (
    <View style={variantStyles[variant]}>
      <Text style={combine(
        TYPOGRAPHY.h4,
        utils.text(textColor),
        utils.mb(2)
      )}>
        {title}
      </Text>
      
      {subtitle && (
        <Text style={combine(
          TYPOGRAPHY.bodySmall,
          utils.text(variant === 'primary' ? 'gray-200' : 'gray-600'),
          utils.mb(3)
        )}>
          {subtitle}
        </Text>
      )}
      
      {description && (
        <Text style={combine(
          TYPOGRAPHY.body,
          utils.text(variant === 'primary' ? 'gray-100' : 'gray-700'),
          utils.mb(4)
        )}>
          {description}
        </Text>
      )}
      
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {cardContent}
      </TouchableOpacity>
    );
  }

  return cardContent;
}

// Usage examples:
export const BrisaCardExamples = () => {
  return (
    <View style={combine(utils.p(4), utils.bg('gray-100'))}>
      {/* Default Card */}
      <BrisaCard 
        title="Default Card" 
        subtitle="Bootstrap class benzeri"
        description="Bu card utils.p(4), utils.bg(), utils.text() gibi utility'ler kullanır"
        onPress={() => console.log('Default card pressed')}
      />
      
      <View style={utils.my(4)} />
      
      {/* Primary Card */}
      <BrisaCard 
        title="Primary Card" 
        subtitle="Brisa mavi teması"
        description="Utility sistemi ile hızlı styling"
        variant="primary"
        onPress={() => console.log('Primary card pressed')}
      />
      
      <View style={utils.my(4)} />
      
      {/* Success Card with custom content */}
      <BrisaCard 
        title="Success Card" 
        subtitle="Custom içerik"
        variant="success"
      >
        <View style={combine(utils.flex.row, utils.flex.between, utils.mt(3))}>
                     <TouchableOpacity style={combine(
             components.btn.base,
             utils.bg('white'),
             utils.flex.flex1,
             utils.mr(2)
           )}>
            <Text style={combine(TYPOGRAPHY.button, utils.text('success'))}>
              İptal
            </Text>
          </TouchableOpacity>
          
                     <TouchableOpacity style={combine(
             components.btn.base,
             utils.bg('white'),
             utils.flex.flex1,
             utils.ml(2)
           )}>
            <Text style={combine(TYPOGRAPHY.button, utils.text('success'))}>
              Tamam
            </Text>
          </TouchableOpacity>
        </View>
      </BrisaCard>
    </View>
  );
}; 