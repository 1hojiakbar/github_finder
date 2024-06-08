import Logo from "./Logo";
import { useState } from "react";
import { Body, Container, Items, Nav, NavItems } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarItems from "./NavItems";

const Navbar = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Container>
      <Nav>
        <Logo />
        <NavbarItems />
      </Nav>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Navbar;
