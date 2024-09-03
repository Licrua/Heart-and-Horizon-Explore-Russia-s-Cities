import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import CityAttractionCarousel from './CityCarousel/CityCarouselMain';
import CityAccordionInfo from './CityAccordion/CityAccordionMain';
import CityDesc from './CityDescription/CityDescMain';
import { useTranslation } from 'react-i18next';

function CityMainContainer({city}) {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );
// const {t} = useTranslation(city)
  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <CityDesc {city} />
      {/* <CityAttractionCarousel />
      <CityAccordionInfo /> */}
    </Container>
  );
}
export default CityMainContainer;
