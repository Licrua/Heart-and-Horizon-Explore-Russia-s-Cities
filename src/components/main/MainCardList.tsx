import { Card, ListGroup } from 'react-bootstrap';
import { City } from '@slices/cities';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';
import styles from '@styles/MainComponents/MainText.module.scss';

type cityItemProp = {
  cityItem: City;
  t: TFunction;
};

function MainCardList({ cityItem, t }: cityItemProp) {
  const navigate = useNavigate();
  const handleClick = (value: string) => {
    navigate(`/${value}`);
  };
  const cityRoute = cityItem.imgName.split('.')[0];
  const citiesPopulation = cityItem.population.toString();
  const citiesFoundatonDate = cityItem.foundation_date;

  return (
    <Card
      as={motion.div}
      initial={{
        opacity: 0,
        x: 50,
        y: -50,
      }}
      whileHover={{
        x: [0, -5, 5, -5, 5, 0],
        filter: 'saturate(200%)',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8)',
        transition: { duration: 1, ease: 'easeInOut' },
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="p-3 mb-3 bg-body rounded"
    >
      <Card.Img
        loading="lazy"
        className="rounded"
        variant="top"
        src={`/src/assets/images/citiesCardImages/${cityItem.imgName}.webp`}
      />
      <Card.Body className={styles.card_description}>
        <Card.Title>{cityItem.name}</Card.Title>
        <Card.Text>{cityItem.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroup.Item className={styles.card_description}>
          {t('cityInfo.Population', { number: citiesPopulation })}
        </ListGroup.Item>
        <ListGroup.Item className={styles.card_description}>
          {t('cityInfo.FoundationDate', { date: citiesFoundatonDate })}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex  justify-content-center">
        <motion.button
          onClick={() => handleClick(cityRoute)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-primary"
        >
          {t('cityInfo.moreDetails')}
        </motion.button>
      </Card.Body>
    </Card>
  );
}
export default MainCardList;
