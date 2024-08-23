import { TFunction } from 'i18next';
import { Card, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

type MainQuotesPropType = {
  t: TFunction;
};

function MainQuotes({ t }: MainQuotesPropType) {
  const quotes = Object.values(
    t('quotes', { returnObjects: true, ns: 'quotesTranslation' })
  );

  return (
    <>
      <div className="text-center">
        <h2>{t('quotesSection.description', { ns: 'mainPageTranslation' })}</h2>
        <p style={{ textWrap: 'balance' }}>
          {t('quotesSection.subtitle', { ns: 'mainPageTranslation' })}
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        {quotes.map((item) => (
          <Card
            as={motion.div}
            whileHover={{
              border: 'solid 2px grey',
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
                <p className="pb-2">
                  <span>“</span>
                  {item.text}
                  <span>”</span>
                </p>
                <footer className="blockquote-footer">
                  {item.author}
                  <cite title="Source Title"> {item.source}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MainQuotes;
