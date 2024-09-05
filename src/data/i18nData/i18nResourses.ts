import welcomePageTranslationRu from '@locales/ru/welcomePageTranslation.json';
import welcomePageTranslationEn from '@locales/en/welcomePageTranslation.json';
import mainPageTranslationRu from '@locales/ru/mainPageTranslation.json';
import mainPageTranslationEn from '@locales/en/mainPageTranslation.json';
import headerPageTranslationEn from '@locales/en/headerPageTranslation.json';
import headerPageTranslationRu from '@locales/ru/headerPageTranslation.json';
import footerPageTranslationEn from '@locales/en/footerPageTranslation.json';
import footerPageTranslationRu from '@locales/ru/footerPageTranslation.json';
import validationTranslationEn from '@locales/en/validationTranslation.json';
import validationTranslationRu from '@locales/ru/validationTranslation.json';
import moscowTranslationEn from '@locales/en/citiesTranslation/moscow.json';
import moscowTranslationRu from '@locales/ru/citiesTranslation/moscow.json';
import spbTranslationEn from '@locales/en/citiesTranslation/spb.json';
import spbTranslationRu from '@locales/ru/citiesTranslation/spb.json';
import quotesTranslationRu from '@locales/ru/quotesTranslation.json';
import quotesTranslationEn from '@locales/en/quotesTranslation.json';
import nskTranslationEn from '@locales/en/citiesTranslation/novosibirsk.json';
import nskTranslationRu from '@locales/ru/citiesTranslation/novosibirsk.json';
import nizhnyNovgorodTranslationRu from '@locales/ru/citiesTranslation/nizhnyNovgorod.json';
import nizhnyNovgorodTranslationEn from '@locales/en/citiesTranslation/nizhnyNovgorod.json';
import kazanTranslationRu from '@locales/ru/citiesTranslation/kazan.json';
import kazanTranslationEn from '@locales/en/citiesTranslation/kazan.json';
import ekbTranslationRu from '@locales/ru/citiesTranslation/ekb.json';
import ekbTranslationEn from '@locales/en/citiesTranslation/ekb.json';
import chelyabinskTranslationEn from '@locales/en/citiesTranslation/chelyabinsk.json';
import chelyabinskTranslationRu from '@locales/ru/citiesTranslation/chelyabinsk.json';
import omskTranslationEn from '@locales/en/citiesTranslation/omsk.json';
import omskTranslationRu from '@locales/ru/citiesTranslation/omsk.json';
import notFoundRu from '@locales/ru/notFoundTranslation.json';
import notFoundEn from '@locales/en/notFoundTranslation.json';
import navigationButtonsTranslationRu from '@locales/ru/navigationButtonsTranslation.json';
import navigationButtonsTranslationEn from '@locales/en/navigationButtonsTranslation.json';

import { LocalesTranslation } from '../../types/locales';

const resources: { [lang: string]: LocalesTranslation } = {
  en: {
    welcomePageTranslation: welcomePageTranslationEn,
    mainPageTranslation: mainPageTranslationEn,
    headerPageTranslation: headerPageTranslationEn,
    footerPageTranslation: footerPageTranslationEn,
    validationTranslation: validationTranslationEn,
    moscow: moscowTranslationEn,
    spb: spbTranslationEn,
    quotesTranslation: quotesTranslationEn,
    novosibirsk: nskTranslationEn,
    nizhnyNovgorod: nizhnyNovgorodTranslationEn,
    kazan: kazanTranslationEn,
    notFoundTranslation: notFoundEn,
    ekb: ekbTranslationEn,
    chelyabinsk: chelyabinskTranslationEn,
    omsk: omskTranslationEn,
    navigationButtonsTranslation: navigationButtonsTranslationEn,
  },
  ru: {
    welcomePageTranslation: welcomePageTranslationRu,
    mainPageTranslation: mainPageTranslationRu,
    headerPageTranslation: headerPageTranslationRu,
    footerPageTranslation: footerPageTranslationRu,
    validationTranslation: validationTranslationRu,
    moscow: moscowTranslationRu,
    spb: spbTranslationRu,
    quotesTranslation: quotesTranslationRu,
    novosibirsk: nskTranslationRu,
    nizhnyNovgorod: nizhnyNovgorodTranslationRu,
    kazan: kazanTranslationRu,
    notFoundTranslation: notFoundRu,
    ekb: ekbTranslationRu,
    chelyabinsk: chelyabinskTranslationRu,
    omsk: omskTranslationRu,
    navigationButtonsTranslation: navigationButtonsTranslationRu,
  },
};

export default resources;
