import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeProvider";

const RootNavigator = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

// Uncomment the line below to export the default storybook configuration. Also comment out the above code.
// export { default } from '../.rnstorybook';
