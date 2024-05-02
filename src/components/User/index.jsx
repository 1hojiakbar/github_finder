import { api } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, Button } from "antd";
import { Typography } from "antd";
import { useState, useEffect } from "react";
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
    <div>
      <Title>{userData ? userData.name : "User Data Loading..."}</Title>
      <Image
        style={{ width: 250 }}
        src={user.avatar_url}
        alt={userData ? userData.name : "a picture of user"}
      />
      {userData && (
        <>
          <Paragraph>{userData.bio}</Paragraph>
          <Paragraph>
            Location:
            <Text code>{userData.location}</Text>
          </Paragraph>
          <br />
          <Paragraph>
            Followers:
            <Text strong code>
              {userData.followers}
            </Text>
          </Paragraph>
          <br />
          <Paragraph>
            Following:
            <Text strong code>
              {userData.following}
            </Text>
          </Paragraph>
          <br />
          <Button
            type="link"
            href={userData.html_url}
            target="_blank"
            style={{ border: "0.8px solid #444" }}
          >
            View Github Profile
          </Button>
        </>
      )}
    </div>
  );
};

export default User;
