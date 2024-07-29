import { Container, Row, Col } from 'react-bootstrap';
import styles from '@styles/Footer/footer.module.css';

function Footer() {
  return (
    <footer className="bg-light border border-3">
      <Container>
        <Row>
          <Col md={4}>
            <p>© 2024 Copyright: RussianCulturalLife.</p>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <a href="https://facebook.com" className={styles.socialIcon}>
              Facebook
            </a>
            <a href="https://twitter.com" className={styles.socialIcon}>
              Twitter
            </a>
            <a href="https://instagram.com" className={styles.socialIcon}>
              Instagram
            </a>
          </Col>
          <Row>
            <Col
              md={4}
              className="d-flex justify-content-center w-100 bg-secondary"
            >
              <p>Контакт: ilay1275@mail.ru</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
