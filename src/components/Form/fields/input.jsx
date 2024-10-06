import { ErrorMessage, FastField } from 'formik';
import FormikError from '../FormikError';

const Input = (props) => {
  const { name, type, placeholder } = props;
  return (
    <div className="">
      <FastField
        type={type}
        name={name}
        placeholder={placeholder}
        className="login__input form-control py-3 px-4 border-gray-300 block "
      />

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Input;
