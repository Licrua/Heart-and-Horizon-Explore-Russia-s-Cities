import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EkbDescHeader from './EkbDescHeader';
import EkbSection from './EkbDescSection';
import EkbDescContainer from './EkbDescText';
import EkbTextSection from './EkbDescTextSection';

function EkbDesc() {
  const { t } = useTranslation('ekbTranslation');
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
        <EkbSection sectionVariant={sectionVariant}>
          <EkbDescHeader t={t} />
          <EkbDescContainer>
            <EkbTextSection t={t} />
          </EkbDescContainer>
        </EkbSection>
      </Col>
    </Row>
  );
}

export default EkbDesc;
