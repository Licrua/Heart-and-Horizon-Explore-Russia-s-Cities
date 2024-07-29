import Header from '@components/header/Header';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import { useState } from 'react';
import iconsKazan from '@images/citiesIMG/kazan.jpg';
import iconsMoscow from '@images/citiesIMG/moscow.jpeg';
import iconsNovgorod from '@images/citiesIMG/novgorod.jpeg';
import styles from '../cityStyles/Moscow.module.css';

function Moscow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Header />
      <Container>
        <section className="my-4">
          <Row>
            <Col md={6} className="d-flex justify-content-center w-100">
              <h1 className={styles.title}>Достопримечательности</h1>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={iconsKazan}
                    alt="Kazan"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={iconsMoscow}
                    alt="Moscow"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={iconsNovgorod}
                    alt="Novgorod"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </section>
        <Row>
          <Col>
            <footer className="my-4">
              <p>&copy; 2024 Все права защищены. Сайт о Москве.</p>
              <p>Контакт: info@moscowpage.com</p>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Moscow;
