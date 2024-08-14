import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '@slices/cities';
import filterIcon from '@images/navbar-logo/filter.webp';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';
import MainText from './MainOpeningText';

type MainContentListType = {
  cityEntities: City[];
};
function MainContentCityList({ cityEntities }: MainContentListType) {
  console.log('cityEntites', cityEntities);

  return (
    <Container>
      <Row>
        <Col className="mb-3 p-3  border-bottom border-dark">
          <MainText />
        </Col>
      </Row>
      <MainContentFilterIcon filterIcon={filterIcon} />
      <Row xs={1} md={2} className="g-4">
        {cityEntities.map((item) => (
          <Col id={`col/${item.id}`} key={item.id}>
            <MainCardList cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContentCityList;
