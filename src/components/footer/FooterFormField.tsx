import { ErrorMessage, Field } from 'formik';
import { Form as BootstrapForm } from 'react-bootstrap';

type InputFieldProps = {
  name: string;
  placeholder: string;
  error: string | undefined;
  touched: boolean | undefined;
};

function FooterFormField({
  name,
  placeholder,
  error,
  touched,
}: InputFieldProps) {
  return (
    <div>
      <BootstrapForm.Label className="me-3" htmlFor={name}>
        <BootstrapForm.Control
          autoComplete={name}
          id={name}
          placeholder={placeholder}
          as={Field}
          name={name}
          className={error && touched ? ' border-2 border-danger m-1' : ''}
        />
      </BootstrapForm.Label>
      <ErrorMessage name={name} component="div" className="text-danger " />
    </div>
  );
}

export default FooterFormField;
