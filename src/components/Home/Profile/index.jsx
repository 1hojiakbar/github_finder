import { Image, Button, Flex } from "antd";
import { Container, MainWrapper } from "../style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Divider, Row } from "antd";

function Profile({ users }) {
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };

  if (!users) return null;

  const handleMoreClick = (user) => {
    navigate("/user", { state: { user } });
  };

  return (
    <Container>
      <MainWrapper>
        <Row>
          {users.map((user) => (
            <Col span={6} key={user.id}>
              {status && (
                <Image
                  width={100}
                  style={{ borderRadius: "50%" }}
                  src={user.avatar_url}
                  alt="User Image"
                  onError={() => setStatus(false)}
                />
              )}
              <Button onClick={() => handleMoreClick(user)}>More</Button>
            </Col>
          ))}
        </Row>
      </MainWrapper>
    </Container>
  );
}

export default Profile;
