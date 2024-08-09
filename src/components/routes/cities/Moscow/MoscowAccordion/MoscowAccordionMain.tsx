import { Accordion, Container, Row, Col } from 'react-bootstrap';
import MoscowAccordionItems from './MoscowAccordionItems';
import AccordionSection from './AccordionSection';

function MoscowAccordionMain() {
  return (
    <Container>
      <Row>
        <Col>
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
