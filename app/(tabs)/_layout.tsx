import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { BrisaHeader } from '@/components/BrisaHeader';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <BrisaHeader />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#0066CC', // Brisa mavi rengi
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
          tabBarLabelStyle: {
            fontSize: 10,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Ana Sayfa',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Hakkımızda',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="info.circle.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="technology"
          options={{
            title: 'Teknoloji',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="gear" color={color} />,
          }}
        />
        <Tabs.Screen
          name="investor"
          options={{
            title: 'Yatırımcı',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="chart.line.uptrend.xyaxis" color={color} />,
          }}
        />
        <Tabs.Screen
          name="sustainability"
          options={{
            title: 'Sürdürülebilirlik',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="leaf.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="career"
          options={{
            title: 'Kariyer',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="person.crop.circle.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: 'Haberler',
            tabBarIcon: ({ color }) => <IconSymbol size={24} name="newspaper.fill" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
