import { useTranslation } from 'react-i18next';
import { cityTypeProp } from 'types/cityComponenType';
import { memo } from 'react';
import CityCarouselHeader from './CityCarouselHeader';
import CityCarouselItems from './CityCarouselItems';
import CityCarouselSection from './CityCarouselSection';

function CityAttractionCarousel({ city }: cityTypeProp) {
  const { t } = useTranslation(city);
  const MemoizedCityCarouselHeader = memo(CityCarouselHeader);
  const MemoizedCityCarouselItems = memo(CityCarouselItems);
  return (
    <CityCarouselSection>
      <MemoizedCityCarouselHeader city={city} t={t} />
      <MemoizedCityCarouselItems city={city} t={t} />
    </CityCarouselSection>
  );
}

export default CityAttractionCarousel;
