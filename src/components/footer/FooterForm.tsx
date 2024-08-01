import { Row, Col, Button, Form as BootstrapForm } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import validationSchema from '@utils/YupValidationFooter';
import Filter from 'bad-words';

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
              <Button
                className="m-2"
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Подписаться
              </Button>{' '}
            </BootstrapForm>
          )}
        </Formik>
      </Col>
    </Row>
  );
}

export default FooterForm;
