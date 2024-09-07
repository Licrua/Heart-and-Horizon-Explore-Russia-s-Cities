import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { cityTypeProp } from 'types/cityComponenType';
import { memo } from 'react';
import CityDescHeader from './CityDescHeader';
import CitySection from './CityDescSection';
import CityDescContainer from './CityDescText';
import CityTextSection from './CityDescTextSection';

function CityDesc({ city }: cityTypeProp) {
  const { t } = useTranslation(city);
  const sectionVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const MemoizedCityDescHeader = memo(CityDescHeader);
  const MemoizedCityTextSection = memo(CityTextSection);

  return (
    <Row>
      <Col>
        <CitySection sectionVariant={sectionVariant}>
          <MemoizedCityDescHeader t={t} city={city} />
          <CityDescContainer>
            <MemoizedCityTextSection t={t} city={city} />
          </CityDescContainer>
        </CitySection>
      </Col>
    </Row>
  );
}

export default CityDesc;
