import { useState } from "react";
import axios from "axios";
import API from "../../utils";
import Profile from "./Profile";
import Loading from "./Loader";
import Search from "./Search";
import { Container } from "./style";

const Home = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUser = async ({ userNick }) => {
    setLoading(true);
    try {
      const response = await axios(`${API}${userNick}`);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Search onSearch={searchUser} />
      {loading ? <Loading /> : <Profile users={users} />}
    </Container>
  );
};

export default Home;
