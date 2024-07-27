import logo from "/github-logo.png";
import { HomeLogo } from "./style";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <HomeLogo onClick={() => navigate("/")}>
      <HomeLogo.Image src={logo} alt="Not Found" />
      <HomeLogo.Title>Github Finder</HomeLogo.Title>
    </HomeLogo>
  );
};

export default Logo;
