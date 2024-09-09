import { Accordion, Container, Row, Col } from 'react-bootstrap';
import CityAccordionItems from './CityAccordionItems';
import AccordionSection from './CityAccordionSection';

function CityAccordionMain() {
  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection>
            <Accordion defaultActiveKey="0">
              <CityAccordionItems />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default CityAccordionMain;
