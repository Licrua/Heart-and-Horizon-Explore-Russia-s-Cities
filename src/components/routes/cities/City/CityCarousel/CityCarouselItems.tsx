import { Carousel, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TFunction } from 'i18next';
import CityImagesMap from '@data/citiesPictures/CityPuctures';
import CityCarouselCaption from './CityCarouselCaption';

type CityCarouselItems = {
  t: TFunction;
};

function CityCarouselItems({ t }: CityCarouselItems) {
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const carouselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const CityAttractions = Object.values(
    t('CityTranslation.CityAttractions', {
      returnObjects: true,
    })
  ).map((attraction) => ({
    ...attraction,
    src: CityImagesMap[attraction.src as keyof typeof CityImagesMap],
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
          {CityAttractions.map((item) => (
            <Carousel.Item
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              key={item.id}
            >
              <img
                style={{
                  height: '500px',
                  objectPosition: 'center',
                  objectFit: 'cover',
                  width: '100%',
                }}
                className="border border-3"
                src={item.src}
                alt={item.name}
              />
              <CityCarouselCaption item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}

export default CityCarouselItems;
