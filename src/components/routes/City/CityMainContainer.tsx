import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { cityTypeProp } from 'types/cityComponenType';
import { useEffect } from 'react';
import { setCurrentCityName } from '@slices/cities';
import CityAttractionCarousel from './CityCarousel/CityCarouselMain';
import CityAccordionInfo from './CityAccordion/CityAccordionMain';
import CityDesc from './CityDescription/CityDescMain';

function CityMainContainer({ city }: cityTypeProp) {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentCityName(city));
  }, [city, dispatch]);

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <CityDesc />
      <CityAttractionCarousel />
      <CityAccordionInfo />
    </Container>
  );
}
export default CityMainContainer;
