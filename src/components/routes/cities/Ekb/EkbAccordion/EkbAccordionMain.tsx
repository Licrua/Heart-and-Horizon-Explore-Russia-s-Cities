import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EkbAccordionItems from './EkbAccordionItems';
import AccordionSection from './EkbAccordionSection';

function EkbAccordionMain() {
  const { t } = useTranslation('ekbTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <EkbAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default EkbAccordionMain;
