import { useTranslation } from 'react-i18next';
import { cityTypeProp } from 'types/cityComponenType';
import CityCarouselHeader from './CityCarouselHeader';
import CityCarouselItems from './CityCarouselItems';
import CityCarouselSection from './CityCarouselSection';

function CityAttractionCarousel({ city }: cityTypeProp) {
  const { t } = useTranslation(city);
  return (
    <CityCarouselSection>
      <CityCarouselHeader city={city} t={t} />
      <CityCarouselItems city={city} t={t} />
    </CityCarouselSection>
  );
}

export default CityAttractionCarousel;
