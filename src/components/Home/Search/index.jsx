import { useState } from "react";
import { Form } from "../style";
import { Button, Input, Space } from "antd";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Space.Compact>
        <Input
          allowClear
          style={{ width: "100%" }}
          size="large"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="search"
        />
      </Space.Compact>
      <Button type="primary" title="Search" size="large" onClick={onSubmit}>
        Search
      </Button>
    </Form>
  );
}

export default Search;
