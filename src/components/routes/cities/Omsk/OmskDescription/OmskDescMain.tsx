import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import OmskDescHeader from './OmskDescHeader';
import OmskSection from './OmskDescSection';
import OmskDescContainer from './OmskDescText';
import OmskTextSection from './OmskDescTextSection';

function OmskDesc() {
  const { t } = useTranslation('omskTranslation');
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
        <OmskSection sectionVariant={sectionVariant}>
          <OmskDescHeader t={t} />
          <OmskDescContainer>
            <OmskTextSection t={t} />
          </OmskDescContainer>
        </OmskSection>
      </Col>
    </Row>
  );
}

export default OmskDesc;
