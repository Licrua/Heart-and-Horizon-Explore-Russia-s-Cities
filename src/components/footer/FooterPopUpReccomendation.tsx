import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';

type FooterPopUpReccomendationProps = {
  t: TFunction;
};

function FooterPopUpReccomendation({ t }: FooterPopUpReccomendationProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row>
      <Col className="d-flex justify-content-center mb-2 ">
        <span className="me-3">
          <strong>{t('footer.suggestionTitle')}</strong>
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-sm btn btn-primary"
          onClick={handleShow}
        >
          {t('footer.suggestButton')}
        </motion.button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{t('footer.modalTitle')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>{t('footer.emailLabel')}</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>{t('footer.descriptionLabel')}</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {t('footer.closeButton')}
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {t('footer.saveButton')}
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
}

export default FooterPopUpReccomendation;
