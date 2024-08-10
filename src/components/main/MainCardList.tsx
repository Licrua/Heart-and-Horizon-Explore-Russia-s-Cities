import { Card, ListGroup } from 'react-bootstrap';
import { City } from '@slices/cities';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type cityItemProp = {
  cityItem: City;
};

function MainCardList({ cityItem }: cityItemProp) {
  const navigate = useNavigate();
  const handleClick = (value: string) => {
    navigate(`/${value}`);
  };
  const cityRoute = cityItem.imgName.split('.')[0];

  return (
    <Card
      as={motion.div}
      initial={{
        opacity: 0,
        x: 1 % 2 === 0 ? 50 : -50,
        y: -50,
      }}
      whileHover={{
        x: [0, -5, 5, -5, 5, 0],
        filter: 'saturate(150%)',
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
      className="p-3 mb-5 bg-body rounded"
    >
      <Card.Img
        variant="top"
        width="300px"
        height="300px"
        src={`/src/assets/images/citiesIMG/${cityItem.imgName}`}
      />
      <Card.Body>
        <Card.Title>{cityItem.name}</Card.Title>
        <Card.Text>{cityItem.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Население - {cityItem.population.toString()} человек.
        </ListGroup.Item>
        <ListGroup.Item>
          Дата основания - {cityItem.foundation_date} год.
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-center">
        <motion.button
          onClick={() => handleClick(cityRoute)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn btn-primary"
        >
          Узнать о городе подробнее
        </motion.button>
      </Card.Body>
    </Card>
  );
}
export default MainCardList;
