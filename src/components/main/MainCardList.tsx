import { Card, ListGroup, Button } from 'react-bootstrap';
import { City } from '@slices/cities';
import { useNavigate } from 'react-router-dom';

type cityItemProp =  {
    cityItem: City;
}

const slicer = 'moscow.jpeg';
console.log(slicer.split('.').shift());



const MainCardList = ({cityItem }: cityItemProp ) => {
  const navigate = useNavigate();
  const handleClick  = (value: string) => {
    navigate(`/${value}`);
  };
  const cityRoute = cityItem.imgName.split('.')[0];

  return (
    <Card className='shadow-lg p-3 mb-5 bg-body rounded'>
      <Card.Img variant="top" width={'300px'} height={'300px'} src={`/src/assets/images/citiesIMG/${cityItem.imgName}`} />
      <Card.Body>
        <Card.Title>{cityItem.name}</Card.Title>
        <Card.Text>
          {cityItem.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Население  - {cityItem.population.toString()} человек</ListGroup.Item>
        <ListGroup.Item>Дата основания  - {cityItem.foundation_date} год</ListGroup.Item>
      </ListGroup>
      <Card.Body className='d-flex justify-content-center'>
        <Button onClick={() => handleClick(cityRoute)}  variant="primary">Узнать о городе подробнее</Button>
      </Card.Body>
    </Card>  
  );
};
export default MainCardList; 