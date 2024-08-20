import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '@slices/cities';
import filterIcon from '@images/navbar-logo/filter.webp';
import { useTranslation } from 'react-i18next';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';
import MainOpeningText from './MainOpeningText';
import MainCityMap from './MainCityMap';

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
      <h2 className="text-center position-relative">
        <span className="me-2">◎</span>
        {t('cardInformation.cardHeader')}
        <span className="ms-2">◎</span>
      </h2>
      <p className="text-center font-italic">
        <em>
          {t('cardInformation.cardDescription.partOne')}
          <br />
          {t('cardInformation.cardDescription.partTwo')}
        </em>
      </p>
      <MainContentFilterIcon t={t} filterIcon={filterIcon} />
      <Row xs={1} md={2} className="g-4">
        {cityEntities.map((item) => (
          <Col id={`col/${item.id}`} key={item.id}>
            <MainCardList t={t} cityItem={item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className=" border-top border-dark p-3 ">
          <h2 className="text-center">
            <span className="me-2">◎</span>
            {t('mapInformation.mapHeader')}
            <span className="ms-2">◎</span>
          </h2>
          <p className="text-center">
            <em>
              {t('mapInformation.mapDescription.partOne')}
              <br />
              {t('mapInformation.mapDescription.partTwo')}
            </em>
          </p>
          <MainCityMap />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContentCityList;
