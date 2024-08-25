import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import EkbAttractionCarousel from './EkbCarousel/EkbCarouselMain';
import EkbAccordionInfo from './EkbAccordion/EkbAccordionMain';
import EkbDesc from './EkbDescription/EkbDescMain';

function EkbMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <EkbDesc />
      <EkbAttractionCarousel />
      <EkbAccordionInfo />
    </Container>
  );
}
export default EkbMainContainer;
