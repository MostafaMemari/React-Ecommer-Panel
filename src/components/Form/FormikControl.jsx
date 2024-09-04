import Input from './fields/input';

const FormikControl = (props) => {
  switch (props.control) {
    case 'input':
      return <Input {...props} />;

    default:
      return null;
  }
};

export default FormikControl;
