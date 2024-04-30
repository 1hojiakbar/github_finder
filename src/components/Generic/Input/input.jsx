import { Input } from "antd";

const FormInput = (props) => (
  <>
    <Input {...props} prefix={props.icon} />
  </>
);
export default FormInput;
