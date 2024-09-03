import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CityAccordionItems from './CityAccordionItems';
import AccordionSection from './CityAccordionSection';

function CityAccordionMain() {
  const { t } = useTranslation('CityTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <CityAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default CityAccordionMain;
