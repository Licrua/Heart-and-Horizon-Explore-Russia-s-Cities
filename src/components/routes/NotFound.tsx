import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import notFoundIcon from '@images/oopsNotFoundPage.png';

function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation('notFoundTranslation');
  const onMainPageHandler = () => {
    navigate('/main');
  };

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex  vh-100 justify-content-center gap-2 my-3 align-items-center flex-column">
          <Image loading="lazy" width="100px" src={notFoundIcon} />
          <h3>{t('notFound.title')}</h3>
          <p>{t('notFound.description')}</p>
          <Button onClick={onMainPageHandler}>{t('notFound.button')}</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default NotFound;
