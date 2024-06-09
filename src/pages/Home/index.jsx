import axios from "axios";
import API from "../../utils";
import { useState } from "react";
import Profile from "./Profile";
import Loading from "./Loader";
import Search from "./Search";
import Footer from "./Footer";
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
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Search onSearch={searchUser} />
      {loading ? <Loading /> : <Profile users={users} />}
      {(!users || users.length === 0) && <Footer />}
    </Container>
  );
};

export default Home;
