import {  Container , Dropdown} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUser } from '@slices/cities';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { selectEntities } from '@slices/cities';
import { useState } from 'react';
import filterIcon from '@images/navbar-logo/filter.webp';

function MainContentCityList() {
  const entities = useAppSelector((state) => selectEntities(state));
  const [isSorted, setSorted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
 

  
  
  const handler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(removeUser(3));
  };
  
  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle className='mb-1' variant="link" id="dropdown-basic">
          <img src={filterIcon} alt="Dropdown Toggle" width={'30px'} height={'30px'} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Отсортировать по населению</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Отсортировать по дате основания</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row xs={1} md={2} className="g-4">
        {Object.values(entities).map((item) => (
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

export default MainContentCityList;