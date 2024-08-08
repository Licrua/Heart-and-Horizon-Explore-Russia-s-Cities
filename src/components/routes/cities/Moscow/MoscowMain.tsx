import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '@styles/Cities/Moscow.module.css';
import { useAppSelector } from '@store/hooks';
import MoscowAttractionCarousel from './MoscowAttractionCarousel';
import MoscowAccordionInfo from './MoscowInfo';
import MoscowDesc from './MoscowDesc';

function MoscowMain() {
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  console.log('currentThemeCurrent', currentThemeCurrent);

  return (
    <Container
      className={currentThemeCurrent === 'black' ? styles.container : ''}
    >
      <MoscowDesc />
      <MoscowAttractionCarousel />
      <MoscowAccordionInfo />
    </Container>
  );
}
export default MoscowMain;
