import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '@slices/cities';
import filterIcon from '@images/navbar-logo/filter.webp';
import { useTranslation } from 'react-i18next';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';
import MainOpeningText from './MainOpeningText';

type MainContentListType = {
  cityEntities: City[];
};
function MainContentCityList({ cityEntities }: MainContentListType) {
  const { t } = useTranslation('mainPageTranslation');
  return (
    <Container>
      <Row>
        <Col className="mb-3 p-3  border-bottom border-dark">
          <MainOpeningText t={t} />
        </Col>
      </Row>
      <MainContentFilterIcon t={t} filterIcon={filterIcon} />
      <Row xs={1} md={2} className="g-4">
        {cityEntities.map((item) => (
          <Col id={`col/${item.id}`} key={item.id}>
            <MainCardList t={t} cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContentCityList;
