import { persistor, store } from "@/src/store/redux/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "../assets/i18n";
import { MediaQueryProvider, ThemeProvider } from "../contexts";

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
      <MediaQueryProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n}>
              <RootNavigator />
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </MediaQueryProvider>
    </ThemeProvider>
  );
}

// Uncomment the line below to export the default storybook configuration. Also comment out the above code.
// export { default } from '../.rnstorybook';
