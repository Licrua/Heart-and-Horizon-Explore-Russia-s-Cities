import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
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
