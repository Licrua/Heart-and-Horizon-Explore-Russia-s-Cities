import 'i18next';
import { LocalesTranslation } from './locales';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: LocalesTranslation;
    lng: string;
    fallbackLng: string;
    ns: string[];
    defaultNS: string;
    interpolation: {
      escapeValue: boolean;
      debug: boolean;
    };
  }
}
