import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';

type SpbCarouselHeaderProps = {
  t: TFunction;
};

function SpbCarouselHeader({ t }: SpbCarouselHeaderProps) {
  return (
    <Row>
      <Col className="my-2" md={6}>
        <motion.h2
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, x: 10, y: 10 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, x: 100 }}
        >
          {t('spbTranslation.headers.0.carouselHeader')}
        </motion.h2>
      </Col>
    </Row>
  );
}

export default SpbCarouselHeader;
