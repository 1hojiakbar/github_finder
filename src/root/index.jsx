import Navbar from "../components/Navbar/";
import Home from "../components/Home";
import About from "../components/About";
import { Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};

export default Root;
