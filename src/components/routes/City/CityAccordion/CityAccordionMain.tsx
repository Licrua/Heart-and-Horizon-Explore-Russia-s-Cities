import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { cityTypeProp } from 'types/cityComponenType';
import CityAccordionItems from './CityAccordionItems';
import AccordionSection from './CityAccordionSection';

function CityAccordionMain({ city }: cityTypeProp) {
  const { t } = useTranslation(city);

  return (
    <Container>
      <Row>
        <Col>
          <AccordionSection city={city} t={t}>
            <Accordion defaultActiveKey="0">
              <CityAccordionItems city={city} t={t} />
            </Accordion>
          </AccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default CityAccordionMain;
