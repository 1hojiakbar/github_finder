import API from "../../utils";
import { Container, Form } from "./style";
import { useState } from "react";
import Search from "./Search";
import Profile from "./Profile";

const Home = () => {
  const [user, setUser] = useState(null);

  const searchUser = async (username) => {
    const response = await fetch(`${API}/${username}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <Container>
      <Search onSearch={searchUser} />
      <Profile user={user} />
    </Container>
  );
};

export default Home;
