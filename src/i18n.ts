import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import { initReactI18next } from 'react-i18next';
import welcomePageTranslationRu from '../locales/ru/welcomePageTranslation.json';
import welcomePageTranslationEn from '../locales/en/welcomePageTranslation.json';
import mainPageTranslationRu from '../locales/ru/mainPageTranslation.json';
import mainPageTranslationEn from '../locales/en/mainPageTranslation.json';
import headerPageTranslationEn from '../locales/en/headerPageTranslation.json';
import headerPageTranslationRu from '../locales/ru/headerPageTranslation.json';
import footerPageTranslationEn from '../locales/en/footerPageTranslation.json';
import footerPageTranslationRu from '../locales/ru/footerPageTranslation.json';

const resources = {
  en: {
    welcomePageTranslation: welcomePageTranslationEn,
    mainPageTranslation: mainPageTranslationEn,
    headerPageTranslation: headerPageTranslationEn,
    footerPageTranslation: footerPageTranslationEn,
  },
  ru: {
    welcomePageTranslation: welcomePageTranslationRu,
    mainPageTranslation: mainPageTranslationRu,
    headerPageTranslation: headerPageTranslationRu,
    footerPageTranslation: footerPageTranslationRu,
  },
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    ns: [
      'welcomePageTranslation',
      'mainPageTranslation',
      'headerPageTranslation',
      'footerPageTranslation',
    ],
    defaultNS: 'welcomePageTranslation',
    interpolation: {
      escapeValue: false,
      debug: true,
    },
  });

export default i18n;
