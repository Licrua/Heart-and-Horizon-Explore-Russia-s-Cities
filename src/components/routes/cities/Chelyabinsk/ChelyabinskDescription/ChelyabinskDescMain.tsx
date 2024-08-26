import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ChelyabinskDescHeader from './ChelyabinskDescHeader';
import ChelyabinskSection from './ChelyabinskDescSection';
import ChelyabinskDescContainer from './ChelyabinskDescText';
import ChelyabinskTextSection from './ChelyabinskDescTextSection';

function ChelyabinskDesc() {
  const { t } = useTranslation('chelyabinskTranslation');
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
        <ChelyabinskSection sectionVariant={sectionVariant}>
          <ChelyabinskDescHeader t={t} />
          <ChelyabinskDescContainer>
            <ChelyabinskTextSection t={t} />
          </ChelyabinskDescContainer>
        </ChelyabinskSection>
      </Col>
    </Row>
  );
}

export default ChelyabinskDesc;
