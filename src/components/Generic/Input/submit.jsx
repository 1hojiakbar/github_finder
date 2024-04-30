import { Button, Input, Space } from "antd";

const Submit = ({ btnType, inpWidth, placeholder }) => {
  return (
    <>
      <Space.Compact block>
        <Input
          style={{
            width: inpWidth,
          }}
          placeholder={placeholder}
        />
        <Button type={btnType}>Submit</Button>
      </Space.Compact>
    </>
  );
};

export default Submit;
