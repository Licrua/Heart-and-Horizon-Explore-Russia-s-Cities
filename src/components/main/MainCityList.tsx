import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { City } from '@slices/cities';
import filterIcon from '@images/navbar-logo/filter.webp';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from '@styles/MainComponents/MainText.module.scss';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';
import MainOpeningText from './MainOpeningText';
import MainCityMap from './MainCityMap';
import MainQuotes from './MainQuotes';

type MainContentListType = {
  cityEntities: City[];
};
function MainContentCityList({ cityEntities }: MainContentListType) {
  const { t } = useTranslation(['mainPageTranslation', 'quotesTranslation']);

  return (
    <Container>
      <Row>
        <Col className="mb-3 p-3  border-bottom border-dark">
          <MainOpeningText t={t} />
        </Col>
      </Row>
      <Row>
        <Col
          as={motion.div}
          initial={{
            opacity: 0,
            x: 50,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <div className={styles.custom_shadow_title}>
            <h2>
              <span className="me-2">◎</span>
              {t('additionalInfo.partingWordsHeader')}
              <span className="ms-2">◎</span>
            </h2>
            <p style={{ textWrap: 'balance' }} className="font-italic">
              <em>
                {t('additionalInfo.partingWordsDescription.partOne')}{' '}
                {t('additionalInfo.partingWordsDescription.partTwo')}
              </em>
            </p>
          </div>
          <MainContentFilterIcon t={t} filterIcon={filterIcon} />
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {cityEntities.map((item) => (
          <Col id={`col/${item.id}`} key={item.id}>
            <MainCardList t={t} cityItem={item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="border-top border-dark p-3">
          <div className={styles.custom_shadow_title}>
            <h2 className="text-center text-light">
              <span className="me-2">◎</span>
              {t('mapInformation.mapHeader')}
              <span className="ms-2">◎</span>
            </h2>
            <p style={{ textWrap: 'balance' }} className="text-center">
              <em>
                {t('mapInformation.mapDescription.partOne')}{' '}
                {t('mapInformation.mapDescription.partTwo')}
              </em>
            </p>
          </div>
          <MainCityMap />
        </Col>
      </Row>
      <Row className="border-top border-dark">
        <Col className="my-4">
          <MainQuotes t={t} />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContentCityList;
