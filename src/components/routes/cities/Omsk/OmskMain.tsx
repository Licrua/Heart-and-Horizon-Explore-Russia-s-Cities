import { useTranslation } from 'react-i18next';

function OmskMain() {
  const { t } = useTranslation('spbTranslation');
  return (
    <div>
      <h1>Omsk</h1>
      <h1>{t('spbTranslation.headers.0.descriptionHeader')}</h1>
    </div>
  );
}

export default OmskMain;
