import React from "react";
import { Body, Container, Items, Nav, NavItems } from "./style";
import { Outlet } from "react-router-dom";
import logo from "/github-logo.png";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Nav.Title>
          <Nav.Title.Image src={logo} alt="Not Found" />
          Github Finder
        </Nav.Title>
        <NavItems>
          <Items to={"/home"}>Home</Items>
          <Items to={"/about"}>About</Items>
        </NavItems>
      </Nav>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Navbar;
