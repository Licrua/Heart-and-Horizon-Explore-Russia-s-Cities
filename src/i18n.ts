import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en/translation.json';
import ruTranslation from '../locales/ru/translation.json';
import MainGreetingTextEn from '../locales/en/mainGreetingText.json';
import MainGreetingTextRu from '../locales/ru/mainGreetingText.json';

const resources = {
  en: {
    translation: enTranslation,
    mainGreetingText: MainGreetingTextEn,
  },
  ru: {
    translation: ruTranslation,
    mainGreetingText: MainGreetingTextRu,
  },
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['translation', 'mainGreetingText'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
      debug: true,
    },
  });

export default i18n;
