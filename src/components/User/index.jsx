import { api } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, Button } from "antd";
import { Typography } from "antd";
import { useState, useEffect } from "react";
import {
  Container,
  UserDataContainer,
  UserImgContainer,
  UserProfileDataWrapper,
} from "./style";
const { Title, Paragraph, Text } = Typography;

const User = () => {
  const [userData, setUserData] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = state;

  async function showUser() {
    const aPI = `${api}/${user.login}`;
    try {
      const response = await fetch(aPI);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    showUser();
  }, []);

  return (
    <Container>
      <Title
        style={{ textAlign: "center", color: "black", marginTop: "0.5rem" }}
      >
        {userData ? userData.name : "User Data Loading..."}
      </Title>
      <UserDataContainer>
        <UserImgContainer>
          <Image
            style={{ width: 150, borderRadius: 7 }}
            src={user.avatar_url}
            alt={userData ? userData.name : "a picture of user"}
          />
        </UserImgContainer>
        {userData && (
          <>
            <Paragraph strong style={{ color: "white", paddingLeft: 15 }}>
              Bio:{" "}
              <Text style={{ color: "white" }}>{userData.bio || "none"}</Text>
            </Paragraph>
            <UserProfileDataWrapper>
              <Paragraph strong style={{ color: "white" }}>
                Location:{" "}
                <Text style={{ color: "white" }}>
                  {userData.location || "none"}
                </Text>
              </Paragraph>
              <UserProfileDataWrapper.Followers>
                <Button
                  type="text"
                  style={{
                    background: "#525CEB",
                    color: "white",
                  }}
                >
                  Followers:
                  <Text strong style={{ color: "white", paddingLeft: ".4rem" }}>
                    {userData.followers}
                  </Text>
                </Button>
                <Button
                  type="text"
                  style={{
                    background: "#525CEB",
                    color: "white",
                  }}
                >
                  Following:
                  <Text strong style={{ color: "white", paddingLeft: ".4rem" }}>
                    {userData.following}
                  </Text>
                </Button>
              </UserProfileDataWrapper.Followers>
            </UserProfileDataWrapper>
            <UserImgContainer>
              <Button
                type="default"
                style={{
                  width: "80%",
                }}
                href={userData.html_url}
                target="_blank"
              >
                View Github Profile
              </Button>
            </UserImgContainer>
          </>
        )}
      </UserDataContainer>
    </Container>
  );
};

export default User;
