// import { Row, Col, Form as BootstrapForm } from 'react-bootstrap';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import validationSchema from '@utils/YupValidationFooter';
// import { motion } from 'framer-motion';
// import { TFunction } from 'i18next';
// import notify from '@utils/toastifyNotify';
// import curseFilter from '@utils/curseFilter';

// type FooterFormProps = {
//   t: TFunction;
// };

// function FooterForm({ t }: FooterFormProps) {
//   type formikValues = {
//     email: string;
//     name: string;
//   };

//   return (
//     <Row>
//       <Col md={4} className=" w-100">
//         <Formik
//           validationSchema={validationSchema}
//           onSubmit={(values: formikValues, { setSubmitting }) => {
//             if (values) {
//               curseFilter(values);
//               notify('formSuccess');
//             } else {
//               notify('error');
//             }
//             setSubmitting(false);
//           }}
//           initialValues={{ email: '', name: '' }}
//         >
//           {({ isSubmitting, errors, touched }) => (
//             <BootstrapForm className="text-center" as={Form}>
//               <p>
//                 <strong>{t('footer.subscribe')}</strong>
//               </p>
//               <BootstrapForm.Label
//                 style={{ marginRight: '10px' }}
//                 htmlFor="email"
//               >
//                 <BootstrapForm.Control
//                   placeholder={t('footer.emailPlaceholder')}
//                   as={Field}
//                   name="email"
//                   type="email"
//                   className={
//                     errors.email && touched.email
//                       ? ' border-2 border-danger'
//                       : ''
//                   }
//                 />
//               </BootstrapForm.Label>
//               <ErrorMessage
//                 name="email"
//                 component="span"
//                 className="me-2 text-danger"
//               />
//               <BootstrapForm.Label htmlFor="name">
//                 <BootstrapForm.Control
//                   placeholder={t('footer.emailPlaceholderExample')}
//                   as={Field}
//                   name="name"
//                   type="text"
//                   className={
//                     errors.name && touched.name ? ' border-2 border-danger' : ''
//                   }
//                 />
//               </BootstrapForm.Label>
//               <ErrorMessage
//                 name="name"
//                 component="span"
//                 className="ms-2 text-danger"
//               />
//               <motion.button
//                 className="btn btn-primary ms-3"
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {t('footer.subscribeButton')}
//               </motion.button>{' '}
//             </BootstrapForm>
//           )}
//         </Formik>
//       </Col>
//     </Row>
//   );
// }

// export default FooterForm;

import { Row, Col, Form as BootstrapForm } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import validationSchema from '@utils/YupValidationFooter';
import { TFunction } from 'i18next';
import notify from '@utils/toastifyNotify';
import curseFilter from '@utils/curseFilter';
import FooterFormButton from './FooterFormButton';
import FooterFormField from './FooterFormField';

type FooterFormProps = {
  t: TFunction;
};

function FooterForm({ t }: FooterFormProps) {
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
          validationSchema={validationSchema}
          onSubmit={(values: formikValues, { setSubmitting }) => {
            if (values) {
              curseFilter(values);
              notify('formSuccess');
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
}

export default FooterForm;
