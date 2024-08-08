import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '@slices/cities';
import filterIcon from '@images/navbar-logo/filter.webp';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';

type MainContentListType = {
  cityEntities: City[];
};
function MainContentCityList({ cityEntities }: MainContentListType) {
  return (
    <Container>
      <MainContentFilterIcon filterIcon={filterIcon} />
      <Row xs={1} md={2} className="g-4">
        {cityEntities.map((item) => (
          <Col key={item.id}>
            <MainCardList cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContentCityList;
