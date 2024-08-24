import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import KazanAttractionCarousel from './KazanCarousel/KazanCarouselMain';
import KazanAccordionInfo from './KazanAccordion/KazanAccordionMain';
import KazanDesc from './KazanDescription/KazanDescMain';

function KazanMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <KazanDesc />
      <KazanAttractionCarousel />
      <KazanAccordionInfo />
    </Container>
  );
}
export default KazanMainContainer;
