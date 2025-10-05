import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vi from "~/locales/vi.translation.json";
import en from "~/locales/en.translation.json";

i18n.use(initReactI18next).init({
  resources: {
    VI: { translation: vi },
    EN: { translation: en },
  },
  lng: "EN", // ngôn ngữ mặc định
  fallbackLng: "VI",
  interpolation: { escapeValue: false },
});

export default i18n;
