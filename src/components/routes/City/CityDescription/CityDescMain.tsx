import { Row, Col } from 'react-bootstrap';
// import { cityTypeProp } from 'types/cityComponenType';
import CityDescHeader from './CityDescHeader';
import CitySection from './CityDescSection';
import CityDescContainer from './CityDescText';
import CityTextSection from './CityDescTextSection';

function CityDesc() {
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
          <CityDescHeader />
          <CityDescContainer>
            <CityTextSection />
          </CityDescContainer>
        </CitySection>
      </Col>
    </Row>
  );
}

export default CityDesc;
