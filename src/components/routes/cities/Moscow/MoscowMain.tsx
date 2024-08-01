import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import MoscowAttractionCarousel from './MoscowAttractionCarousel';
import MoscowAccordionInfo from './MoscowInfo';
import MoscowDesc from './MoscowDesc';

function MoscowMain() {
  return (
    <>
      <Header />
      <Container>
        <MoscowDesc />
        <section className="my-3">
          <Row>
            <Col md={6}>
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Достопримечательности
              </motion.h2>
            </Col>
          </Row>
        </section>
        <MoscowAttractionCarousel />
        <MoscowAccordionInfo />
      </Container>
      <Footer />
    </>
  );
}
export default MoscowMain;
