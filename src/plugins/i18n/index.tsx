import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "src/plugins/i18n/lang/en.json";
import zhTW from "src/plugins/i18n/lang/zh-TW.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    "zh-TW": { translation: zhTW },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
