import i18n from '../i18n';

const setLanguage = (language: 'ru' | 'en' | undefined): void => {
  i18n.changeLanguage(language);
};

export default setLanguage;
