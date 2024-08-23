import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SpbDescHeader from './SpbDescHeader';
import SpbSection from './SpbDescSection';
import SpbDescContainer from './SpbDescText';
import SpbTextSection from './SpbDescTextSection';

function SpbDesc() {
  const { t } = useTranslation('spbTranslation');
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
        <SpbSection sectionVariant={sectionVariant}>
          <SpbDescHeader t={t} />
          <SpbDescContainer>
            <SpbTextSection t={t} />
          </SpbDescContainer>
        </SpbSection>
      </Col>
    </Row>
  );
}

export default SpbDesc;
