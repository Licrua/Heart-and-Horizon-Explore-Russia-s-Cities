import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NizhnyNovgorodDescHeader from './NizhnyNovgorodDescHeader';
import NizhnyNovgorodSection from './NizhnyNovgorodDescSection';
import NizhnyNovgorodDescContainer from './NizhnyNovgorodDescText';
import NizhnyNovgorodTextSection from './NizhnyNovgorodDescTextSection';

function NizhnyNovgorodDesc() {
  const { t } = useTranslation('nizhnyNovgorodTranslation');
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
        <NizhnyNovgorodSection sectionVariant={sectionVariant}>
          <NizhnyNovgorodDescHeader t={t} />
          <NizhnyNovgorodDescContainer>
            <NizhnyNovgorodTextSection t={t} />
          </NizhnyNovgorodDescContainer>
        </NizhnyNovgorodSection>
      </Col>
    </Row>
  );
}

export default NizhnyNovgorodDesc;
