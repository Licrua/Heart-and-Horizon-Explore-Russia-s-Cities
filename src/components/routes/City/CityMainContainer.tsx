import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { cityTypeProp } from 'types/cityComponenType';
import { memo } from 'react';
import CityAttractionCarousel from './CityCarousel/CityCarouselMain';
import CityAccordionInfo from './CityAccordion/CityAccordionMain';
import CityDesc from './CityDescription/CityDescMain';

function CityMainContainer({ city }: cityTypeProp) {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  const MemoizedCityDesc = memo(CityDesc);
  const MemoizedCityAttractionCarousel = memo(CityAttractionCarousel);
  const MemoizedCityAccordionInfo = memo(CityAccordionInfo);

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <MemoizedCityDesc city={city} />
      <MemoizedCityAttractionCarousel city={city} />
      <MemoizedCityAccordionInfo city={city} />
    </Container>
  );
}
export default CityMainContainer;
