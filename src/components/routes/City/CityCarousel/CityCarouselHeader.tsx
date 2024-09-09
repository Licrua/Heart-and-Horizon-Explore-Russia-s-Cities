import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@store/hooks';

function CityCarouselHeader() {
  const city = useAppSelector((state) => state?.cities?.currentCityName);
  const { t } = useTranslation(city);

  return (
    <Row>
      <Col className="my-2" md={6}>
        <motion.h2
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, x: 10, y: 10 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, x: 100 }}
        >
          {t(`${city}.headers.0.carouselHeader`)}
        </motion.h2>
      </Col>
    </Row>
  );
}

export default CityCarouselHeader;
