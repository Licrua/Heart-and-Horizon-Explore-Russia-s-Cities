import { Card, ListGroup } from 'react-bootstrap';
import { City, changeThemableToggler } from '@slices/cities';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@store/hooks';

type cityItemProp = {
  cityItem: City;
};

function MainCardList({ cityItem }: cityItemProp) {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = (value: string) => {
    // dispatch(changeThemableToggler(true));
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
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="shadow-lg p-3 mb-5 bg-body rounded"
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
