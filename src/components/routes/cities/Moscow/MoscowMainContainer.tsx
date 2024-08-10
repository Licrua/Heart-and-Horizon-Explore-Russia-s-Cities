import { Container } from 'react-bootstrap';
import styles from '@styles/Cities/MoscowMainContainer.module.scss';
import { useAppSelector } from '@store/hooks';
import MoscowAttractionCarousel from './MoscowCarousel/MoscowCarouselMain';
import MoscowAccordionInfo from './MoscowAccordion/MoscowAccordionMain';
import MoscowDesc from './MoscowDescription/MoscowDescMain';

function MoscowMainContainer() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? styles.container : ''}
    >
      <MoscowDesc />
      <MoscowAttractionCarousel />
      <MoscowAccordionInfo currentThemeCurrent={currentThemeCurrent} />
    </Container>
  );
}
export default MoscowMainContainer;
