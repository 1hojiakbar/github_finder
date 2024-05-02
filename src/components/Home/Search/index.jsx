import { Alert, Button, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { Form, SearchContainer } from "../style";

function Search({ onSearch }) {
  const [userNick, setUserNick] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (userNick.length > 0) setStatus("");
  }, [userNick]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!userNick.trim()) {
      setStatus("error");
    } else {
      onSearch({ userNick: userNick.trim() });
      setStatus("");
    }
  };

  const onClear = () => {
    setUserNick("");
  };

  return (
    <SearchContainer>
      {status === "error" && (
        <Alert description="Please enter something!" type="error" showIcon />
      )}
      <Form onSubmit={onSubmit}>
        <Space>
          <Input
            allowClear
            size="large"
            value={userNick}
            onChange={(e) => setUserNick(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSubmit(e)}
            placeholder={
              status === "error" ? "Enter something" : "Search GitHub Users"
            }
          />
          <Button type="primary" size="large" onClick={onSubmit}>
            Search
          </Button>
        </Space>
      </Form>
    </SearchContainer>
  );
}

export default Search;
