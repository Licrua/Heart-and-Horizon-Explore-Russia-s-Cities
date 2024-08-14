import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import { initReactI18next } from 'react-i18next';
import welcomePageTranslationRu from '../locales/ru/welcomePageTranslation.json';
import welcomePageTranslationEn from '../locales/en/welcomePageTranslation.json';
import mainPageTranslationRu from '../locales/en/mainPageTranslation.json';
import mainPageTranslationEn from '../locales/ru/mainPainTranslation.json';

const resources = {
  en: {
    welcomePageText: welcomePageTranslationRu,
    mainOpeningText: mainPageTranslationEn,
  },
  ru: {
    welcomePageText: welcomePageTranslationEn,
    mainOpeningText: mainPageTranslationRu,
  },
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['welcomePageTranslation', 'mainPageTranslation'],
    defaultNS: 'welcomePageTranslation',
    interpolation: {
      escapeValue: false,
      debug: true,
    },
  });

export default i18n;
