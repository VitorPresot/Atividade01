import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="Quiz1" />
      <Stack.Screen name="Quiz2" />
      <Stack.Screen name="Quiz3" />
      <Stack.Screen name="Quiz4" />
      <Stack.Screen name="Quiz5" />
      <Stack.Screen name="Quiz6" />
      <Stack.Screen name="Quiz7" />
      <Stack.Screen name="Quiz8" />
      <Stack.Screen name="Quiz9" />
      <Stack.Screen name="Quiz10" />
    </Stack>
  );
}
