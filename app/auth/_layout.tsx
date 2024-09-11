import { Stack as RouteStack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <RouteStack
      screenOptions={{
        headerShown: false,
      }}
    >
      <RouteStack.Screen name="login" />
      <RouteStack.Screen name="register" />
      <RouteStack.Screen name="forgot-password" />
    </RouteStack>
  );
}
