import { Card, Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '@styles/MainComponents/MainQuotes.module.scss';
import { useTranslation } from 'react-i18next';

function MainQuotes() {
  const { t } = useTranslation(['mainPageTranslation', 'quotesTranslation']);
  const quotes = Object.values(
    t('quotes.authors', { returnObjects: true, ns: 'quotesTranslation' })
  );

  return (
    <>
      <div className={styles.quote_description}>
        <h2>
          <span className="me-2">◎</span>
          {t('quotesSection.description', { ns: 'mainPageTranslation' })}
          <span className="me-2">◎</span>
        </h2>
        <p style={{ textWrap: 'balance' }}>
          {t('quotesSection.subtitle', { ns: 'mainPageTranslation' })}
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        {quotes.map((item) => (
          <Card
            as={motion.div}
            whileHover={{
              border: 'solid  grey',
              boxShadow:
                '-10px 0 10px -5px rgba(0, 0, 0, 0.5), 10px 0 10px -5px rgba(0, 0, 0, 0.5)',
            }}
            transition={{
              duration: 1,
              ease: 'linear',
            }}
            key={item.id}
            style={{ width: '15rem' }}
          >
            <Card.Body>
              <blockquote className="blockquote mb-0 text-center ">
                <Image
                  className="border my-3 border-info rounded-circle shadow-lg"
                  width="100px"
                  src={`/src/assets/images/quotesImages/${item.imageName}.png`}
                  roundedCircle
                />
                <p className={styles.quote_description}>
                  <span>“</span>
                  {item.text}
                  <span>”</span>
                </p>

                <footer className="blockquote-footer">
                  {item.author}
                  <cite title="Source Title"> {item.source}</cite>
                </footer>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`https://ru.wikipedia.org/wiki/${item.author?.slice(0, -1)}`}
                >
                  <Button className="btn btn-primary" type="button">
                    {t('quotes.aboutAthor', {
                      ns: 'quotesTranslation',
                    })}
                  </Button>
                </Link>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MainQuotes;
