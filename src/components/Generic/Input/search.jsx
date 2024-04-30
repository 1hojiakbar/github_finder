import { Input, Space } from "antd";

const Search = ({ size, placeholder, inpWidth }) => {
  return (
    <>
      <Space.Compact>
        <Input
          allowClear
          style={{
            width: inpWidth,
          }}
          placeholder={placeholder}
          size={size}
        />
      </Space.Compact>
    </>
  );
};

export default Search;
