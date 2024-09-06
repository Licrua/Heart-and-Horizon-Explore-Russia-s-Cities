import * as Yup from 'yup';
import i18next from 'i18next';

const validationSchemaSubscription = Yup.object({
  email: Yup.string()
    .email(i18next.t('email', { ns: 'validationTranslation' }))
    .required(i18next.t('required', { ns: 'validationTranslation' })),
  name: Yup.string()
    .required(i18next.t('required', { ns: 'validationTranslation' }))
    .min(3, i18next.t('min', { ns: 'validationTranslation' })),
});

export default validationSchemaSubscription;
