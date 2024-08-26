import { useTranslation } from 'react-i18next';
import OmskCarouselHeader from './OmskCarouselHeader';
import OmskCarouselItems from './OmskCarouselItems';
import OmskCarouselSection from './OmskCarouselSection';

function OmskAttractionCarousel() {
  const { t } = useTranslation('omskTranslation');
  console.log('translation', t('OmskTranslation.headers.0.carouselHeader'));

  return (
    <OmskCarouselSection>
      <OmskCarouselHeader t={t} />
      <OmskCarouselItems t={t} />
    </OmskCarouselSection>
  );
}

export default OmskAttractionCarousel;
