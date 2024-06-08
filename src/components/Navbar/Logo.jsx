import React from "react";
import logo from "/github-logo.png";
import { useNavigate } from "react-router-dom";
import { HomeLogo, Nav } from "./style";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <HomeLogo onClick={() => navigate("/home")}>
      <HomeLogo.Image src={logo} alt="Not Found" />
      <HomeLogo.Title>Github Finder</HomeLogo.Title>
    </HomeLogo>
  );
};

export default Logo;
