import { useTranslation } from 'react-i18next';
import MoscowCarouselHeader from './MoscowCarouselHeader';
import MoscowCarouselItems from './MoscowCarouselItems';
import MoscowCarouselSection from './MoscowCarouselSection';

function MoscowAttractionCarousel() {
  const { t } = useTranslation('citiesTranslation');
  return (
    <MoscowCarouselSection>
      <MoscowCarouselHeader t={t} />
      <MoscowCarouselItems t={t} />
    </MoscowCarouselSection>
  );
}

export default MoscowAttractionCarousel;
