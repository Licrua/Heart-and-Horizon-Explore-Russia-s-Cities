import welcomePageTranslationRu from '@locales/ru/welcomePageTranslation.json';
import welcomePageTranslationEn from '@locales/en/welcomePageTranslation.json';
import mainPageTranslationRu from '@locales/ru/mainPageTranslation.json';
import mainPageTranslationEn from '@locales/en/mainPageTranslation.json';
import headerPageTranslationEn from '@locales/en/headerPageTranslation.json';
import headerPageTranslationRu from '@locales/ru/headerPageTranslation.json';
import footerPageTranslationEn from '@locales/en/footerPageTranslation.json';
import footerPageTranslationRu from '@locales/ru/footerPageTranslation.json';
import notifySuccessEn from '@locales/en/notifyTranslation.json';
import notifySuccessRu from '@locales/ru/notifyTranslation.json';
import validationTranslationEn from '@locales/en/validationTranslation.json';
import validationTranslationRu from '@locales/ru/validationTranslation.json';
import moscowTranslationEn from '@locales/en/citiesTranslation/moscowTranslation.json';
import moscowTranslationRu from '@locales/ru/citiesTranslation/moscowTranslation.json';
import spbTranslationEn from '@locales/en/citiesTranslation/spbTranslation.json';
import spbTranslationRu from '@locales/ru/citiesTranslation/spbTranslation.json';
import quotesTranslationRu from '@locales/ru/quotesTranslation.json';
import quotesTranslationEn from '@locales/en/quotesTranslation.json';
import nskTranslationEn from '@locales/en/citiesTranslation/novosibirskTranslation.json';
import nskTranslationRu from '@locales/ru/citiesTranslation/novosibirskTranslation.json';
import nizhnyNovgorodTranslationRu from '@locales/ru/citiesTranslation/nizhnyNovgorodTranslation.json';
import nizhnyNovgorodTranslationEn from '@locales/en/citiesTranslation/nizhnyNovgorodTranslation.json';
import kazanTranslationRu from '@locales/ru/citiesTranslation/kazanTranslation.json';
import kazanTranslationEn from '@locales/en/citiesTranslation/kazanTranslation.json';
import ekbTranslationRu from '@locales/ru/citiesTranslation/ekbTranslation.json';
import ekbTranslationEn from '@locales/en/citiesTranslation/ekbTranslation.json';
import chelyabinskTranslationEn from '@locales/en/citiesTranslation/chelyabinskTranslation.json';
import chelyabinskTranslationRu from '@locales/ru/citiesTranslation/chelyabinskTranslation.json';
import omskTranslationEn from '@locales/en/citiesTranslation/omskTranslation.json';
import omskTranslationRu from '@locales/ru/citiesTranslation/omskTranslation.json';
import notFoundRu from '@locales/ru/notFoundTranslation.json';
import notFoundEn from '@locales/en/notFoundTranslation.json';
import { LocalesTranslation } from '../../types/locales';

const resources: { [lang: string]: LocalesTranslation } = {
  en: {
    welcomePageTranslation: welcomePageTranslationEn,
    mainPageTranslation: mainPageTranslationEn,
    headerPageTranslation: headerPageTranslationEn,
    footerPageTranslation: footerPageTranslationEn,
    notifyTranslation: notifySuccessEn,
    validationTranslation: validationTranslationEn,
    moscowTranslation: moscowTranslationEn,
    spbTranslation: spbTranslationEn,
    quotesTranslation: quotesTranslationEn,
    novosibirskTranslation: nskTranslationEn,
    nizhnyNovgorodTranslation: nizhnyNovgorodTranslationEn,
    kazanTranslation: kazanTranslationEn,
    notFoundTranslation: notFoundEn,
    ekbTranslation: ekbTranslationEn,
    chelyabinskTranslation: chelyabinskTranslationEn,
    omskTranslation: omskTranslationEn,
  },
  ru: {
    welcomePageTranslation: welcomePageTranslationRu,
    mainPageTranslation: mainPageTranslationRu,
    headerPageTranslation: headerPageTranslationRu,
    footerPageTranslation: footerPageTranslationRu,
    notifyTranslation: notifySuccessRu,
    validationTranslation: validationTranslationRu,
    moscowTranslation: moscowTranslationRu,
    spbTranslation: spbTranslationRu,
    quotesTranslation: quotesTranslationRu,
    novosibirskTranslation: nskTranslationRu,
    nizhnyNovgorodTranslation: nizhnyNovgorodTranslationRu,
    kazanTranslation: kazanTranslationRu,
    notFoundTranslation: notFoundRu,
    ekbTranslation: ekbTranslationRu,
    chelyabinskTranslation: chelyabinskTranslationRu,
    omskTranslation: omskTranslationRu,
  },
};

export default resources;
