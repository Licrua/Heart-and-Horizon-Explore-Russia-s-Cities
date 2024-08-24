import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import KazanAccordionItems from './KazanAccordionItems';
import AccordionSection from './KazanAccordionSection';

function KazanAccordionMain() {
  const { t } = useTranslation('kazanTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <KazanAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default KazanAccordionMain;
