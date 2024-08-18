import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MoscowAccordionItems from './MoscowAccordionItems';
import AccordionSection from './AccordionSection';

function MoscowAccordionMain() {
  const { t } = useTranslation('citiesTranslation');
  console.log('t', t);

  console.log('translation', t('MoscowTranslation.headers.1.accordionHeader'));
  const data = {
    headers: [
      {
        accordionHeader: 'Additional Information',
        carouselHeader: 'Attractions',
        descriptionHeader: 'Information',
      },
    ],
  };
  console.log(data.headers[0].accordionHeader);

  return (
    <Container>
      <Row>
        <Col>
          <h2>{t('MoscowTranslation.headers.accordionHeader')}</h2>
          <h2>{t('MoscowTranslation.pavel')}</h2>
          <AccordionSection>
            <Accordion defaultActiveKey="0">
              <MoscowAccordionItems />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default MoscowAccordionMain;
