import { Alert, Button, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { Form, SearchButton, SearchContainer, SearchInput } from "../style";
import ButtonGroup from "antd/es/button/button-group";

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
      <Form onSubmit={onSubmit}>
        <Space.Compact>
          <SearchInput
            allowClear
            value={userNick}
            size="large"
            onChange={(e) => setUserNick(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSubmit(e)}
            placeholder={
              status === "error" ? "Enter something" : "Search GitHub Users"
            }
          />
          <SearchButton type="primary" onClick={onSubmit}>
            Search<i class="fa-solid fa-magnifying-glass"></i>
          </SearchButton>
        </Space.Compact>
      </Form>
      {status === "error" && (
        <Alert description="Please enter something!" type="error" showIcon />
      )}
    </SearchContainer>
  );
}

export default Search;
