import { useTranslation } from 'react-i18next';
import SpbCarouselHeader from './SpbCarouselHeader';
import SpbCarouselItems from './SpbCarouselItems';
import SpbCarouselSection from './SpbCarouselSection';

function SpbAttractionCarousel() {
  const { t } = useTranslation('spbTranslation');
  return (
    <SpbCarouselSection>
      <SpbCarouselHeader t={t} />
      <SpbCarouselItems t={t} />
    </SpbCarouselSection>
  );
}

export default SpbAttractionCarousel;
