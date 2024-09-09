import { Carousel, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import cityImagesMap, { CityImagesMapType } from '@data/cityImagesMap';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@store/hooks';
import { LoadingSpinner } from 'video-react';
import CityCarouselCaption from './CityCarouselCaption';

function CityCarouselItems() {
  const [index, setIndex] = useState<number>(0);
  const city = useAppSelector((state) => state?.cities?.currentCityName);
  const { t } = useTranslation(city);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const carouselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const cityAttractions = useMemo(() => {
    const imagesMap = cityImagesMap[city as keyof CityImagesMapType] || {};
    return Object.values(t(`${city}.attractions`, { returnObjects: true })).map(
      (attraction) => ({
        ...attraction,
        src: imagesMap[attraction.src as keyof typeof imagesMap] || '',
      })
    );
  }, [city, t]);



  if (!cityAttractions.length) {
    return <LoadingSpinner />;
  }

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
          {cityAttractions.map((item) => (
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
