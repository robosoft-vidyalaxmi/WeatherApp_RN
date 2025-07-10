import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import translationEn from "./locales/en-US/translation.json";
import translationJa from "./locales/ja/translation.json";
import { Platform } from "react-native";

const resources = {
  ja: { translation: translationJa },
  "en-US": { translation: translationEn },
};

const initI18n = async () => {
  let locale: string = "en-US";
  if (Platform.OS !== "web") {
    locale = getLocales()[0].languageCode ?? "en-US";
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    ...(Platform.OS !== "web" ? { lng: locale } : {}),
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
