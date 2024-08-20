import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MoscowAccordionItems from './MoscowAccordionItems';
import AccordionSection from './MoscowAccordionSection';

function MoscowAccordionMain() {
  const { t } = useTranslation('citiesTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <MoscowAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default MoscowAccordionMain;
