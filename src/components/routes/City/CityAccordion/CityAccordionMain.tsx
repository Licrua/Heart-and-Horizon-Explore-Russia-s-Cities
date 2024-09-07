import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { cityTypeProp } from 'types/cityComponenType';
import { memo } from 'react';
import CityAccordionItems from './CityAccordionItems';
import AccordionSection from './CityAccordionSection';

function CityAccordionMain({ city }: cityTypeProp) {
  const { t } = useTranslation(city);
  const MemoizedAccordionSection = memo(AccordionSection);
  const MemoizedCityAccordionItems = memo(CityAccordionItems);

  return (
    <Container>
      <Row>
        <Col>
          <MemoizedAccordionSection city={city} t={t}>
            <Accordion defaultActiveKey="0">
              <MemoizedCityAccordionItems city={city} t={t} />
            </Accordion>
          </MemoizedAccordionSection>
        </Col>
      </Row>
    </Container>
  );
}

export default CityAccordionMain;
