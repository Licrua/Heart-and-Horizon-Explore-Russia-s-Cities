import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import OmskAttractionCarousel from './OmskCarousel/OmskCarouselMain';
import OmskAccordionInfo from './OmskAccordion/OmskAccordionMain';
import OmskDesc from './OmskDescription/OmskDescMain';

function OmskMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <OmskDesc />
      <OmskAttractionCarousel />
      <OmskAccordionInfo />
    </Container>
  );
}
export default OmskMainContainer;
