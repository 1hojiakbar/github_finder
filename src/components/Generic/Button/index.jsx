import { Button } from "antd";

const FormButton = ({ size, type, title }) => {
  return (
    <>
      <Button type={type} size={size}>
        {title}
      </Button>
    </>
  );
};

export default FormButton;
