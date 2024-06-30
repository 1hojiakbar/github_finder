import { Container } from "./style";
import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";
import Navbar from "../components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;
