import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { cityTypeProp } from 'types/cityComponenType';
import CityAttractionCarousel from './CityCarousel/CityCarouselMain';
import CityAccordionInfo from './CityAccordion/CityAccordionMain';
import CityDesc from './CityDescription/CityDescMain';

function CityMainContainer({ city }: cityTypeProp) {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <CityDesc city={city} />
      <CityAttractionCarousel city={city} />
      <CityAccordionInfo city={city} />
    </Container>
  );
}
export default CityMainContainer;
