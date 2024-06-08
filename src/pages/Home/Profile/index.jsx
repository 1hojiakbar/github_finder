import { Image, Button, Flex, Typography } from "antd";
import { Container, MainWrapper, ProfileWrapper, UserProfile } from "../style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function Profile({ users }) {
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  if (!users) return null;

  const handleMoreClick = (user) => {
    navigate("/user", { state: { user } });
  };

  return (
    <Container>
      <MainWrapper>
        <ProfileWrapper>
          {users.map((user) => (
            <UserProfile span={6} key={user.id}>
              {status && (
                <Image
                  preview={false}
                  width={100}
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                  src={user.avatar_url}
                  alt="User Image"
                  onError={() => setStatus(false)}
                />
              )}
              <Title code level={5} style={{ whiteSpace: "nowrap" }}>
                {user.login}
              </Title>
              <Button
                type="default"
                style={{ width: "100%" }}
                onClick={() => handleMoreClick(user)}
              >
                More
              </Button>
            </UserProfile>
          ))}
        </ProfileWrapper>
      </MainWrapper>
    </Container>
  );
}

export default Profile;
