import { Row, Col, Form as BootstrapForm } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import validationSchema from '@utils/YupValidationFooter';
import Filter from 'bad-words';
import { motion } from 'framer-motion';

function FooterForm() {
  type formikValues = {
    email: string;
    name: string;
  };
  const filter = new Filter(); // profanity filter
  return (
    <Row>
      <Col md={4} className=" w-100">
        <Formik
          validationSchema={validationSchema}
          onSubmit={(values: formikValues, { setSubmitting }) => {
            setTimeout(() => {
              console.log('values', values);
              alert(
                JSON.stringify(
                  filter.clean(`${values.email}, ${values.name}`),
                  null,
                  2
                )
              );
              setSubmitting(false);
            }, 400);
          }}
          initialValues={{ email: '', name: '' }}
        >
          {({ isSubmitting }) => (
            <BootstrapForm className="text-center" as={Form}>
              <p>
                <strong>Подпишитесь, для получения рассылки!</strong>
              </p>
              <BootstrapForm.Label
                style={{ marginRight: '10px' }}
                htmlFor="email"
              >
                <BootstrapForm.Control
                  placeholder="Почта"
                  as={Field}
                  name="email"
                  type="email"
                />
              </BootstrapForm.Label>
              <BootstrapForm.Label htmlFor="name">
                <BootstrapForm.Control
                  placeholder="Имя"
                  as={Field}
                  name="name"
                  type="text"
                />
              </BootstrapForm.Label>
              <motion.button
                className="btn btn-primary ms-3"
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Подписаться
              </motion.button>{' '}
            </BootstrapForm>
          )}
        </Formik>
      </Col>
    </Row>
  );
}

export default FooterForm;
