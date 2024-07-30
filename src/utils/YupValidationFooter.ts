import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string()
    .required('Required')
    .min(3, 'must be at least 8 characters long'),
});

export default validationSchema;
