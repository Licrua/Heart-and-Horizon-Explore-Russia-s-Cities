import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import KazanDescHeader from './KazanDescHeader';
import KazanSection from './KazanDescSection';
import KazanDescContainer from './KazanDescText';
import KazanTextSection from './KazanDescTextSection';

function KazanDesc() {
  const { t } = useTranslation('kazanTranslation');
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
        <KazanSection sectionVariant={sectionVariant}>
          <KazanDescHeader t={t} />
          <KazanDescContainer>
            <KazanTextSection t={t} />
          </KazanDescContainer>
        </KazanSection>
      </Col>
    </Row>
  );
}

export default KazanDesc;
