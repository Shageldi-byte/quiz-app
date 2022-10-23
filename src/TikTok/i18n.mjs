import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            home:"Home",
            search:"Search",
            inbox:"Inbox",
            profile:"Profile"
        }
    },
    tm: {
        translation: {
            home:"Esasy",
            search:"Gözleg",
            inbox:"Bukja",
            profile:"Hasabym"
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "tm",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;