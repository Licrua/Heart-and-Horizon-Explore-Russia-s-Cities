import { CityTranslation } from './cityTranslation';

interface TranslationNested {
  // eslint-disable-next-line no-use-before-define
  [key: string]: TranslationValue;
}

type TranslationValue = string | TranslationNested | CityTranslation;

export interface LocalesTranslation {
  [namespace: string]: TranslationNested;
}
