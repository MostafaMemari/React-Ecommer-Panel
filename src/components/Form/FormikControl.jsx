import Input from "./fields/input";
import Select from "./fields/select";

const FormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "select":
      return <Select {...props} />;
    default:
      return null;
  }
};

export default FormikControl;
