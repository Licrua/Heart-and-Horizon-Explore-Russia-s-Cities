import * as Yup from 'yup';
import i18next from 'i18next';

const translation = 'validationTranslation';

const validationSchemaSubscription = Yup.object({
  email: Yup.string()
    .email(i18next.t('email', { ns: translation }))
    .required(i18next.t('required', { ns: translation })),
  name: Yup.string()
    .required(i18next.t('required', { ns: translation }))
    .min(3, i18next.t('min', { ns: translation })),
});

export default validationSchemaSubscription;
