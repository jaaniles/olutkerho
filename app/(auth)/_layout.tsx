import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { TabBarIcon } from '~/components/navigation/TabBarIcon';
import { Colors } from '~/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="/" options={{ headerShown: false }} />
      <Stack.Screen name="/register" options={{ headerShown: false }} />
      <Stack.Screen name="/forgot-password" options={{ headerShown: false }} />
    </Stack>
  );
}
