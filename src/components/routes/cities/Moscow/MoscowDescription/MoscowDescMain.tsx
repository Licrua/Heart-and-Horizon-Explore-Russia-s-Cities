import { Row, Col } from 'react-bootstrap';
import MoscowDescHeader from './MoscowDescHeader';
import MoscowSection from './MoscowDescSection';
import MoscowDescContainer from './MoscowDescText';
import MoscowTextSection from './MoscowDescTextSection';

function MoscowDesc() {
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
        <MoscowSection sectionVariant={sectionVariant}>
          <MoscowDescHeader />
          <MoscowDescContainer>
            <MoscowTextSection />
          </MoscowDescContainer>
        </MoscowSection>
      </Col>
    </Row>
  );
}

export default MoscowDesc;
