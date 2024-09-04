// import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import notFoundIcon from '@images/oopsNotFoundPage.png';

function NotFound() {
  const navigate = useNavigate();
  //   const { t } = useTranslation('notFoundTranslation');
  const { t } = useTranslation('nizhnyNovgorodTranslation');
  const string = 'NizhnyNovgorodTranslation';

  //   const onMainPageHandler = () => {
  //     navigate('/main');
  //   };

  const NizhnyNovgorodAttractions = Object.values(
    t('NizhnyNovgorodTranslation.NizhnyNovgorodAttractions', {
      returnObjects: true,
    })
  );
  console.log('NizhnyNovgorodAttractions', NizhnyNovgorodAttractions);

  return (
    <Container fluid>
      <p> {t(`${string}.headers.0.accordionHeader`)}</p>
      {/* <Row>
        <Col className="d-flex  vh-100 justify-content-center gap-2 my-3 align-items-center flex-column">
          <Image width="100px" src={notFoundIcon} />
          <h3>{t('notFound.title')}</h3>
          <p>{t('notFound.description')}</p>
          <Button onClick={onMainPageHandler}>{t('notFound.button')}</Button>
        </Col>
      </Row> */}
    </Container>
  );
}
export default NotFound;
