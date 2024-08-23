import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NovosibirskDescHeader from './NovosibirskDescHeader';
import NovosibirskSection from './NovosibirskDescSection';
import NovosibirskDescContainer from './NovosibirskDescText';
import NovosibirskTextSection from './NovosibirskDescTextSection';

function NovosibirskDesc() {
  const { t } = useTranslation('novosibirskTranslation');
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
        <NovosibirskSection sectionVariant={sectionVariant}>
          <NovosibirskDescHeader t={t} />
          <NovosibirskDescContainer>
            <NovosibirskTextSection t={t} />
          </NovosibirskDescContainer>
        </NovosibirskSection>
      </Col>
    </Row>
  );
}

export default NovosibirskDesc;
