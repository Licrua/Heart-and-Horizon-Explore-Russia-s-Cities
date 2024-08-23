import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SpbAccordionItems from './SpbAccordionItems';
import AccordionSection from './SpbAccordionSection';

function SpbAccordionMain() {
  const { t } = useTranslation('spbTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <SpbAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default SpbAccordionMain;
