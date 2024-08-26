import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ChelyabinskAccordionItems from './ChelyabinskAccordionItems';
import AccordionSection from './ChelyabinskAccordionSection';

function ChelyabinskAccordionMain() {
  const { t } = useTranslation('chelyabinskTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <ChelyabinskAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default ChelyabinskAccordionMain;
