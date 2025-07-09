import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}

// Uncomment the line below to export the default storybook configuration. Also comment out the above code.
// export { default } from '../.rnstorybook';
