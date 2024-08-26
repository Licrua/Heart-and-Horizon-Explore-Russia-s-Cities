import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import OmskAccordionItems from './OmskAccordionItems';
import AccordionSection from './OmskAccordionSection';

function OmskAccordionMain() {
  const { t } = useTranslation('omskTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <OmskAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default OmskAccordionMain;