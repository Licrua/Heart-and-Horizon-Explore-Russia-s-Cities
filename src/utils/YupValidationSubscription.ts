import * as Yup from 'yup';
import i18next from 'i18next';

const validationSchemaSubscription = Yup.object({
  email: Yup.string()
    .email(i18next.t('email', { ns: 'validationTranslation' }))
    .required(i18next.t('required', { ns: 'validationTranslation' })),
  name: Yup.string()
    .required(i18next.t('required', { ns: 'validationTranslation' }))
    .min(2, i18next.t('nameMinLength', { ns: 'validationTranslation' }))
    .max(10, i18next.t('nameMaxLength', { ns: 'validationTranslation' })),
});

export default validationSchemaSubscription;
