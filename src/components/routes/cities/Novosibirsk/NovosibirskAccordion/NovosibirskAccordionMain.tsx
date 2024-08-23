import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NovosibirskAccordionItems from './NovosibirskAccordionItems';
import AccordionSection from './NovosibirskAccordionSection';

function NovosibirskAccordionMain() {
  const { t } = useTranslation('novosibirskTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <NovosibirskAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default NovosibirskAccordionMain;
