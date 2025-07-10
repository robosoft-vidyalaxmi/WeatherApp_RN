import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeProvider";

const RootNavigator = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-SemiBold": require("../assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

// Uncomment the line below to export the default storybook configuration. Also comment out the above code.
// export { default } from '../.rnstorybook';
