import { Row, Col, Form as BootstrapForm } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import validationSchemaSubscription from '@utils/YupValidationSubscription';
import { TFunction } from 'i18next';
import notify from '@utils/toastifyNotify';
import curseFilter from '@utils/curseFilter';
import onMailSend from '@utils/emailJsService';
import React from 'react';
import FooterFormButton from './FooterFormButton';
import FooterFormField from './FooterFormField';

type FooterFormProps = {
  t: TFunction;
};

const FooterForm = React.memo(({ t }: FooterFormProps) => {
  type formikValues = {
    email: string;
    name: string;
  };

  return (
    <Row>
      <Col md={4} className=" w-100">
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={validationSchemaSubscription}
          onSubmit={(values: formikValues, { setSubmitting }) => {
            if (values.email.length > 5 && values.name.length >= 3) {
              curseFilter(values);
              onMailSend(values);
            } else {
              notify('error');
            }
            setSubmitting(false);
          }}
          initialValues={{ email: '', name: '' }}
        >
          {({ isSubmitting, errors, touched }) => (
            <BootstrapForm className="text-center" as={Form}>
              <p>
                <strong>{t('footer.subscribe')}</strong>
              </p>
              <FooterFormField
                name="email"
                placeholder={t('footer.emailPlaceholder')}
                error={errors.email}
                touched={touched.email}
              />
              <FooterFormField
                name="name"
                placeholder={t('footer.emailPlaceholderExample')}
                error={errors.name}
                touched={touched.name}
              />
              <FooterFormButton
                isSubmitting={isSubmitting}
                text={t('footer.subscribeButton')}
              />
            </BootstrapForm>
          )}
        </Formik>
      </Col>
    </Row>
  );
});

export default FooterForm;
