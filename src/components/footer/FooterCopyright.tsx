import { TFunction } from 'i18next';
import { Col, Row } from 'react-bootstrap';

type FooterCopyrightPropsType = {
  t: TFunction;
};

function FooterCopyright({ t }: FooterCopyrightPropsType) {
  return (
    <Row>
      <Col className=" d-flex w-100 justify-content-center ">
        <p className="m-0">{t('footer.copyright')}</p>
      </Col>
    </Row>
  );
}
export default FooterCopyright;
