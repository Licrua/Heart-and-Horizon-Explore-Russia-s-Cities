import { useTranslation } from 'react-i18next';

function OmskMainContainer() {
  const { t } = useTranslation('ekbTranslation');
  return (
    <div>
      <h1>Omsk</h1>
      <h1>{t('nizhnyNovgorodTranslation.headers.0.descriptionHeader')}</h1>
      <h1>{t('EkbTranslation.headers.0.descriptionHeader')}</h1>
    </div>
  );
}

export default OmskMainContainer;
