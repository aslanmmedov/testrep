import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import az from "./locales/az.json";
import en from "./locales/en.json";

i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources:{
        az:{translation:az},
        en:{translation:en}
    },
    fallbackLng: "az",
    interpolation:{escapeValue: false},
})

export default i18next;