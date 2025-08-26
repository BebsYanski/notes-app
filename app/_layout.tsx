import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
          fontSize: 20,
        },
        headerTintColor: "#fff",
        contentStyle: {
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingVertical: 10,
        },
        animation: "fade",
        animationDuration: 200,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
