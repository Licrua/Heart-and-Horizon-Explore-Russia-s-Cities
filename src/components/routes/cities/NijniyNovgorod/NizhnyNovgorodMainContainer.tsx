import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import NizhnyNovgorodAttractionCarousel from './NizhnyNovgorodCarousel/NizhnyNovgorodCarouselMain';
import NizhnyNovgorodAccordionInfo from './NizhnyNovgorodAccordion/NizhnyNovgorodAccordionMain';
import NizhnyNovgorodDesc from './NizhnyNovgorodDescription/NizhnyNovgorodDescMain';

function NizhnyNovgorodMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <NizhnyNovgorodDesc />
      <NizhnyNovgorodAttractionCarousel />
      <NizhnyNovgorodAccordionInfo />
    </Container>
  );
}
export default NizhnyNovgorodMainContainer;
