import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import NovosibirskAttractionCarousel from './NovosibirskCarousel/NovosibirskCarouselMain';
import NovosibirskAccordionInfo from './NovosibirskAccordion/NovosibirskAccordionMain';
import NovosibirskDesc from './NovosibirskDescription/NovosibirskDescMain';

function NovosibirskMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      <NovosibirskDesc />
      <NovosibirskAttractionCarousel />
      <NovosibirskAccordionInfo />
    </Container>
  );
}
export default NovosibirskMainContainer;
