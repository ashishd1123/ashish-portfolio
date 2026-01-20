import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";

i18n
  .use(initReactI18next)
  .use(Backend);

if (isBrowser) {
  i18n.use(LanguageDetector);
}

const initConfig = {
  fallbackLng: "en",
  load: "languageOnly",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  backend: {
    ns: ["translation"],
    loadPath: "/ashish-portfolio/locales/{{lng}}/{{ns}}.json",
  },
};

// Only add detection config if we're in browser environment
if (isBrowser) {
  initConfig.detection = {
    order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
    caches: ["localStorage"],
  };
}

i18n.init(initConfig);

export default i18n;