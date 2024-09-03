import { useTranslation } from 'react-i18next';
import CityCarouselHeader from './CityCarouselHeader';
import CityCarouselItems from './CityCarouselItems';
import CityCarouselSection from './CityCarouselSection';

function CityAttractionCarousel() {
  const { t } = useTranslation('CityTranslation');
  return (
    <CityCarouselSection>
      <CityCarouselHeader t={t} />
      <CityCarouselItems t={t} />
    </CityCarouselSection>
  );
}

export default CityAttractionCarousel;
