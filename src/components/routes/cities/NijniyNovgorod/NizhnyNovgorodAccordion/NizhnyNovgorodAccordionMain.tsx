import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NizhnyNovgorodAccordionItems from './NizhnyNovgorodAccordionItems';
import AccordionSection from './NizhnyNovgorodAccordionSection';

function NizhnyNovgorodAccordionMain() {
  const { t } = useTranslation('nizhnyNovgorodTranslation');

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection t={t}>
            <Accordion defaultActiveKey="0">
              <NizhnyNovgorodAccordionItems t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default NizhnyNovgorodAccordionMain;
