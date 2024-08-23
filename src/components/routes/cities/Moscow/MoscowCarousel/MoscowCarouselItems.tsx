import { Carousel, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TFunction } from 'i18next';
import moscowImagesMap from '@data/citiesPictures/moscowPictures';
import MoscowCarouselCaption from './MoscowCarouselCaption';

type MoscowCarouselItems = {
  t: TFunction;
};

function MoscowCarouselItems({ t }: MoscowCarouselItems) {
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const carouselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const moscowAttractions = Object.values(
    t('MoscowTranslation.moscowAttractions', { returnObjects: true })
  ).map((attraction) => ({
    ...attraction,
    src: moscowImagesMap[attraction.src as keyof typeof moscowImagesMap],
  }));

  return (
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
                style={{
                  objectPosition: 'center ',
                  objectFit: 'cover',
                  width: '100%',
                  height: '500px',
                }}
                className="border border-3"
                src={item.src}
                alt={item.name}
              />
              <MoscowCarouselCaption item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}

export default MoscowCarouselItems;
