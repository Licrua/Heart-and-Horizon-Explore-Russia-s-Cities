import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import SpbAttractionCarousel from './SpbCarousel/SpbCarouselMain';
import SpbAccordionInfo from './SpbAccordion/SpbAccordionMain';
import SpbDesc from './SpbDescription/SpbDescMain';

function SpbMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <SpbDesc />
      <SpbAttractionCarousel />
      <SpbAccordionInfo />
    </Container>
  );
}
export default SpbMainContainer;
