import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function MoscowAccordionInfo() {
  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-4 ">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Дополнительная информация
            </motion.h2>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Почему стоит посетить город</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Москва — это уникальное сочетание истории и современности.
                    Город предлагает посетителям множество исторических
                    достопримечательностей, таких как Кремль и Красная площадь,
                    а также современные районы с небоскребами и торговыми
                    центрами. Москва славится своими музеями, театрами и
                    культурными событиями, которые привлекают миллионы туристов
                    со всего мира.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Лучший сезон для посещения</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Летний сезон, с июня по август, считается лучшим временем
                    для посещения Москвы. В это время погода теплая, что
                    позволяет насладиться прогулками по городу и посещением
                    парков и садов. Осень и весна также являются хорошими
                    сезонами для посещения, когда погода комфортная и нет
                    большого наплыва туристов. Зима в Москве может быть
                    холодной, но город в этот период украшен праздничными огнями
                    и рождественскими ярмарками, что создает волшебную
                    атмосферу.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>На что обратить внимание</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Во время посещения Москвы стоит обратить внимание на такие
                    достопримечательности, как Собор Василия Блаженного, Большой
                    театр и ГУМ. Обязательно стоит посетить Третьяковскую
                    галерею и Пушкинский музей, чтобы насладиться богатой
                    коллекцией русского и мирового искусства. Не забывайте также
                    попробовать местную кухню в многочисленных ресторанах и
                    кафе, предлагающих традиционные блюда, такие как борщ и
                    блины.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default MoscowAccordionInfo;
