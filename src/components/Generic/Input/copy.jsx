import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, Space, Tooltip } from "antd";

const Copy = ({ placeholder, title, inpWidth }) => {
  return (
    <>
      <Space.Compact block>
        <Input
          style={{
            width: inpWidth,
          }}
          placeholder={placeholder}
        />
        <Tooltip title={title}>
          <Button icon={<CopyOutlined />} />
        </Tooltip>
      </Space.Compact>
    </>
  );
};

export default Copy;
