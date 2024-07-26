import {  Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUser } from '@slices/cities';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';



function CityList() {
  const citiesList = useAppSelector((state) => state.cities.entities);
  const dispatch = useAppDispatch()
  
  const handler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeUser(3))
  }

  



  

  
  
  

  
  return (
    <Container>
    <Row xs={1} md={2} className="g-4">
      <button onClick={handler}>ddsdadd</button>
      <button onClick={() => dispatch(cityAdded({id: 10, name: 'sanek', city: 'parashka'}))}>12</button>
      <button onClick={() => dispatch(cityRemoved(1))}>удалить</button>
      {citiesList.map((item) => (
        <Col key={item.id}> 
          <Card className='shadow-lg p-3 mb-5 bg-body rounded'>
            <Card.Img variant="top" width={'300px'} height={'300px'} src={`/src/assets/images/citiesIMG/${item.imgName}`} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
          <ListGroup.Item>Население  - {item.population} человек</ListGroup.Item>
          <ListGroup.Item>Дата основания  - {item.foundation_date} год</ListGroup.Item>
        </ListGroup>
        <Card.Body className='d-flex justify-content-center'>
        <Button  variant="primary">Узнать о городе подробнее</Button>
        </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</Container>
  );
}

export default CityList;