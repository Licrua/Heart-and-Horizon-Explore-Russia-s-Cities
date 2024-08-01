import moscowAttractions from '@utils/MosckowPictures';
import { Row, Col, Carousel } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';

function MoscowAttractionCarousel() {
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const carouselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const captionVariants = {
    hidden: { opacity: 0, scale: 0, y: 20, x: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };
  return (
    <section className="border-bottom border-3">
      <Row>
        <Col xs={12} className="my-2">
          <Carousel
            indicators
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={carouselVariants}
            className="border rounded"
            activeIndex={index}
            onSelect={handleSelect}
          >
            {moscowAttractions.map((item) => (
              <Carousel.Item
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
                key={item.id}
              >
                <img
                  style={{ height: '500px', objectPosition: 'center' }}
                  className="d-block w-100 object-fit-cover"
                  src={item.src}
                  alt={item.name}
                />
                <Carousel.Caption
                  as={motion.div}
                  initial="hidden"
                  animate="visible"
                  variants={captionVariants}
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="lh-3 f-bold"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(0, 0, 1, 0.5), rgba(0, 0, 0, 0))',
                    }}
                  >
                    <strong>{item.description}</strong>
                  </motion.p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
}

export default MoscowAttractionCarousel;
