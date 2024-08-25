import { useTranslation } from 'react-i18next';
import EkbCarouselHeader from './EkbCarouselHeader';
import EkbCarouselItems from './EkbCarouselItems';
import EkbCarouselSection from './EkbCarouselSection';

function EkbAttractionCarousel() {
  const { t } = useTranslation('ekbTranslation');
  return (
    <EkbCarouselSection>
      <EkbCarouselHeader t={t} />
      <EkbCarouselItems t={t} />
    </EkbCarouselSection>
  );
}

export default EkbAttractionCarousel;
