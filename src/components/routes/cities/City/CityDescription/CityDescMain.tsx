import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CityDescHeader from './CityDescHeader';
import CitySection from './CityDescSection';
import CityDescContainer from './CityDescText';
import CityTextSection from './CityDescTextSection';

function CityDesc({ city }) {
  const { t } = useTranslation(city);
  const sectionVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <Row>
      <Col>
        <CitySection sectionVariant={sectionVariant}>
          <CityDescHeader t={t} city={city} />
          <CityDescContainer>
            <CityTextSection t={t} city={city} />
          </CityDescContainer>
        </CitySection>
      </Col>
    </Row>
  );
}

export default CityDesc;
