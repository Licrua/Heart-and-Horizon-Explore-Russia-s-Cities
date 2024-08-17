import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import notify from '@utils/toastifyNotify';
import validationSchema from '@utils/YupValidationFooter';
import curseFilter from '@utils/curseFilter';

type FooterPopUpReccomendationProps = {
  t: TFunction;
};

function FooterPopUpReccomendation({ t }: FooterPopUpReccomendationProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = { email: '', description: '' };

  const onSubmit = (
    values: typeof initialValues,
    { setSubmitting }: (isSubmitting: boolean) => void
  ) => {
    if (values) {
      notify('formSuccess');
      curseFilter(values);
      setSubmitting(false);
      handleClose();
      console.log('setSubmitting', setSubmitting);
    } else {
      notify('error');
    }
  };

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <FormikForm>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>{t('footer.emailLabel')}</Form.Label>
                    <Field
                      type="email"
                      name="email"
                      as={Form.Control}
                      placeholder={t('footer.emailPlaceholder')}
                      autoFocus
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>{t('footer.descriptionLabel')}</Form.Label>
                    <Field
                      as={Form.Control}
                      name="description"
                      component="textarea"
                      className="w-100"
                      rows={4}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      {t('footer.closeButton')}
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {t('footer.saveButton')}
                    </Button>
                  </Modal.Footer>
                </FormikForm>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
}

export default FooterPopUpReccomendation;
