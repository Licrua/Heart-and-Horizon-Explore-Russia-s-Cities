import { useTranslation } from 'react-i18next';

function OmskMainContainer() {
  const { t } = useTranslation('novosibirskTranslation');
  return (
    <div>
      <h1>Omsk</h1>
      <h1>{t('NovosibirskTranslation.headers.0.descriptionHeader')}</h1>
    </div>
  );
}

export default OmskMainContainer;
