import { Carousel, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TFunction } from 'i18next';
import ChelyabinskImagesMap from '@data/citiesPictures/chelyabinskPuctures';
import ChelyabinskCarouselCaption from './ChelyabinskCarouselCaption';

type ChelyabinskCarouselItems = {
  t: TFunction;
};

function ChelyabinskCarouselItems({ t }: ChelyabinskCarouselItems) {
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const carouselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const ChelyabinskAttractions = Object.values(
    t('ChelyabinskTranslation.ChelyabinskAttractions', {
      returnObjects: true,
    })
  ).map((attraction) => ({
    ...attraction,
    src: ChelyabinskImagesMap[
      attraction.src as keyof typeof ChelyabinskImagesMap
    ],
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
          {ChelyabinskAttractions.map((item) => (
            <Carousel.Item
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              key={item.id}
            >
              <img
                loading="lazy"
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
              <ChelyabinskCarouselCaption item={item} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}

export default ChelyabinskCarouselItems;
