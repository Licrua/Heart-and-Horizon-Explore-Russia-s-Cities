import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function MoscowDesc() {
  const sectionVariant = {
    hidden: { opacity: 0, scale: 0, y: 20, x: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Row>
      <Col>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="border-bottom border-3"
        >
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Информация
          </motion.h2>
          <p>
            <span className=" float-start lh-1 fw-bold fs-1 me-1">М</span>
            осква — сердце России, её столица и крупнейший город, сочетающий в
            себе богатую историю и современность. Город, основанный в 1147 году,
            славится своими архитектурными памятниками, среди которых выделяются{' '}
            <span className="bg-body-secondary text-dark px-2">
              Кремль
            </span> и{' '}
            <span className="bg-body-secondary text-dark px-2">
              Красная площадь
            </span>{' '}
            — объекты всемирного наследия ЮНЕСКО. Москва — это не только
            политический и экономический центр страны, но и культурная столица,
            где сосредоточены лучшие театры, музеи и галереи, такие как{' '}
            <span className="bg-body-secondary text-dark px-2">
              Большой театр
            </span>
            ,{' '}
            <span className="bg-body-secondary text-dark px-2">
              Третьяковская галерея
            </span>{' '}
            и{' '}
            <span className="bg-body-secondary text-dark px-2">
              Музей изобразительных искусств имени Пушкина
            </span>
            .
          </p>
          <p>
            <span className="float-start lh-1 fw-bold fs-1 me-1 ">Г</span>ород
            удивляет своим разнообразием: здесь можно найти как узкие улочки с
            историческими зданиями, так и современные небоскрёбы в деловом
            центре &quot;Москва-Сити&quot;. Прекрасные парки, такие как{' '}
            <span className="bg-body-secondary text-dark px-2">
              Парк Горького
            </span>{' '}
            и <span className="bg-body-secondary text-dark px-2">ВДНХ</span>,
            предлагают множество возможностей для отдыха и развлечений. Вечерняя
            Москва особенно красива благодаря подсветке мостов и зданий,
            создающей волшебную атмосферу.
          </p>
          <p>
            <span className="ffloat-start lh-1 fw-bold fs-1 me-1">T</span>
            ранспортная система города — одна из лучших в мире, включая
            знаменитое{' '}
            <span className="bg-body-secondary text-dark px-2">
              Московское метро
            </span>{' '}
            с его великолепными станциями, напоминающими подземные дворцы.
            Москва — это город контрастов, динамичный и многогранный, в котором
            каждый найдёт что-то для себя.
          </p>
        </motion.section>
      </Col>
    </Row>
  );
}

export default MoscowDesc;
