import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(Backend) // loads translations from /public/locales/{{lng}}/translation.json
  .use(LanguageDetector) // 🔥 detects language from localStorage, cookies, browser
  .init({
    fallbackLng: "en",
    supportedLngs: ["en"],
    load: "languageOnly",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
       ns: ["translation"],
       loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    detection: {
      // 👇 detection order
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // store user language in localStorage
    },
  });

export default i18n;

// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// i18n.use(Backend)
// 	.use(LanguageDetector)
// 	.use(initReactI18next)
// 	.init({
// 		backend: {
// 			// translation file path
// 			loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
// 		},
// 		fallbackLng: "en",
// 		// disabled in production
// 		debug: false,
// 		// can have multiple namespaces, in case you want to divide a huge
// 		// translation into smaller pieces and load them on demand
// 		ns: ["About"],

// 		interpolation: {
// 			espaceValue: false,
// 			formatSeparator: ",",
// 		},
// 		react: {
// 			wait: true,
// 		},
// 	});

// export default i18n;