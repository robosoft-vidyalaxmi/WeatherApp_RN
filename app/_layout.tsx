import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

// Uncomment the line below to export the default storybook configuration. Also comment out the above code.
// export { default } from '../.rnstorybook';
