import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';
import { initReactI18next } from 'react-i18next';
import namespaces from '@data/i18nData/i18nNamespaces';
import resources from '@data/i18nData/i18nResourses';

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    ns: namespaces,
    defaultNS: 'welcomePageTranslation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
